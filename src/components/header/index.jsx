import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { autobind } from 'core-decorators';
import Button from '../../components/button';
import siteConfig from '../../../site_config/site';
import { getLink } from '../../../utils';
import './index.scss';

const languageSwitch = [
  {
    text: '中',
    value: 'en-us',
  },
  {
    text: 'En',
    value: 'zh-cn',
  },
];
const searchSwitch = {
  baidu: {
    logo: 'https://img.alicdn.com/tfs/TB1n6DQayLaK1RjSZFxXXamPFXa-300-300.png',
    url: 'https://www.baidu.com/s?wd=',
  },
  google: {
    logo: 'https://img.alicdn.com/tfs/TB1REfuaCzqK1RjSZFjXXblCFXa-300-300.jpg',
    url: 'https://www.google.com/search?q=',
  },
};
const noop = () => { };
const propTypes = {
  currentKey: PropTypes.string,
  logo: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'normal']),
  language: PropTypes.oneOf(['en-us', 'zh-cn']),
  onLanguageChange: PropTypes.func,
};
const defaultProps = {
  type: 'primary',
  language: 'en-us',
  onLanguageChange: noop,
};

@autobind
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuBodyVisible: false,
      language: props.language,
      search: siteConfig.defaultSearch,
      searchValue: '',
      inputVisible: false,
      headerType: 'normal'
    };
  }


  componentWillReceiveProps(nextProps) {
    this.setState({
      language: nextProps.language,
    });
  }

  toggleMenu() {
    this.setState({
      menuBodyVisible: !this.state.menuBodyVisible,
    });
  }

  switchLang() {
    let language;
    if (this.state.language === 'zh-cn') {
      language = 'en-us';
    } else {
      language = 'zh-cn';
    }
    this.setState({
      language,
    });
    this.props.onLanguageChange(language);
  }

  switchSearch() {
    let search;
    if (this.state.search === 'baidu') {
      search = 'google';
    } else {
      search = 'baidu';
    }
    this.setState({
      search,
    });
  }

  toggleSearch() {
    this.setState({
      searchVisible: !this.state.searchVisible,
    });
  }

  onInputChange(e) {
    this.setState({
      searchValue: e.target.value,
    });
  }

  goSearch() {
    const { search, searchValue } = this.state;
    window.open(`${searchSwitch[search].url}${window.encodeURIComponent(`${searchValue} site:${siteConfig.domain}`)}`);
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      this.goSearch();
    }
  }

  render() {
    const { type, logo, onLanguageChange, currentKey } = this.props;
    const { menuBodyVisible, language, search, searchVisible } = this.state;
    return (
      <header
        className={
          classnames({
            'header-container': true,
            [`header-container-${type}`]: true,
          })
        }
      >
        <a href={getLink(`/${language}/index.html`)} className="logo-link">
          <img className="logo" alt={siteConfig.name} title={siteConfig.name} src={getLink(logo)} />
        </a>
        <div className="header-body">

          <div
            className={
              classnames({
                'header-menu': true,
                'header-menu-open': menuBodyVisible,
              })
            }
          >
            <img
              className="header-menu-toggle"
              onClick={this.toggleMenu}
              src={type === 'primary' ? getLink('/img/system/menu_white.png') : getLink('/img/system/menu_gray.png')}
            />
            <ul>
              {siteConfig[language].pageMenu.map(item => (
                <li
                  key={item.key}
                  className={classnames({
                    'menu-item': true,
                    [`menu-item-${type}`]: true,
                    [`menu-item-${type}-active`]: currentKey === item.key,
                  })}
                >
                  {item.link && !item.children ? <span><a href={getLink(item.link)} target={item.target ? '_blank' : null}>{item.text}</a>{item.imgUrl ? <img className={"menu-img"} src={item.imgUrl} /> : null}</span> : null}
                  {item.children ? <div className="nav-container"><a href={item.link ? getLink(item.link) : ''}  ><div className="word">{item.text}{item.imgUrl ? <img className={"menu-img"} src={item.imgUrl} /> : null}</div></a><ul className="sub-nav-container" style={{ width: language === 'zh-cn' ? 220 : 290 }}>{item.children.map((child) => <li><a href={child.link} target="_blank" style={{ display: 'block', width: '100%', height: '100%' }}>{child.text}</a></li>)}</ul> </div> : null}
                </li>))}
            </ul>
          </div>
          <div className="header-more-action">
            <div style={{ float: 'right' }} className="get-start">
              <Button type={type === 'primary' ? 'normal' : 'primary'} link={`/${language}/developer/index.html`}>开始使用</Button>
            </div>
            {
              siteConfig.defaultSearch ?
                (
                  <div
                    className={classnames({
                      search: true,
                      [`search-${type}`]: true,
                    })}
                  >

                    <span className="icon-search" onClick={this.toggleSearch} />
                    {
                      searchVisible ?
                        (
                          <div className="search-input">
                            <img src={searchSwitch[search].logo} onClick={this.switchSearch} />
                            <input autoFocus onChange={this.onInputChange} onKeyDown={this.onKeyDown} />
                          </div>
                        ) : null
                    }

                  </div>
                ) : null
            }
            {/* {
              onLanguageChange !== noop ?
                (<span
                  className={
                    classnames({
                      'language-switch': true,
                      [`language-switch-${type}`]: true,
                    })
                  }
                  onClick={this.switchLang}
                >
                  {languageSwitch.find(lang => lang.value === language).text}
                </span>)
                :
                null
            } */}
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;
