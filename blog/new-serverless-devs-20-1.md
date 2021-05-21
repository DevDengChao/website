---
slug: new-serverless-devs-20-1
title: 从玩具到生产力 1：Serverless Devs的新手引导
author: Anycodes
author_title: Serverless Devs
author_url: https://github.com/anycodes
author_image_url: https://avatars.githubusercontent.com/u/21079031?v=4
tags: [命令行, Serverless, 全新版本]
date: 2021-05-21
---

# 从玩具到生产力 1：Serverless Devs的新手引导

Serverless devs在上个月末，在中国上海，发布了2.0版本，对于很多看热闹的人可能就是一个开源工具的升级更新，但是对于我个人来说，这是Serverless Devs从玩具到生产力的转变。

在Serverless Devs 1.0版本，我们是完全的在摸索一条Serverless开发者工具的路，这条路很黑，我们在艰难前进。经过几个月的努力，我们逐渐的看到了光亮，于是在Serverless devs 2.0版本正式发布。

相对于1.0版本，2.0在很多层面上都有了十足的优化。

## “无休止”的引导

Serverless devs 2.0版本，增加了很多的引导，以至于一个超级小白，都可以快速入手体验。

当我们通过`npm install -g @serverless-devs/s`完成了Serverless devs的安装，我们仅需要一个`s`就可以开始Serverless之旅：

![image](https://user-images.githubusercontent.com/21079031/119006455-f929eb00-b9c2-11eb-98e0-7bb1cc451faa.png)

非常明显的`s init`，带着我们迈向开始的第一步， 选择一个`hello world`： 

![image](https://user-images.githubusercontent.com/21079031/119006717-2eced400-b9c3-11eb-8c95-0fb89f238d53.png)

此时我们还没有配置过密钥信息，所以会让我们配置：

![image](https://user-images.githubusercontent.com/21079031/119006840-4c03a280-b9c3-11eb-8f3b-4cc9e7c6a1e2.png)

我们选择`Alibaba Cloud`即可再次看到引导：

![image](https://user-images.githubusercontent.com/21079031/119006920-60479f80-b9c3-11eb-8c95-a44724566084.png)

打开引导，不仅可以看到密钥的获取方法：

![image](https://user-images.githubusercontent.com/21079031/119007001-735a6f80-b9c3-11eb-9f2c-0cf72d670b07.png)

还可以看到安全建议：

![image](https://user-images.githubusercontent.com/21079031/119007074-81a88b80-b9c3-11eb-9ceb-228f7a9d566a.png)

密钥配置成功之后，依旧可以看到下一步的引导：

![image](https://user-images.githubusercontent.com/21079031/119007477-d815ca00-b9c3-11eb-904d-9de00db9c092.png)

当我们输入：

```
cd /Users/jiangyu/Desktop/untitled/start-fc/src/mytest/myhello
s -h
```

之后，我们可以看到金手指：

![image](https://user-images.githubusercontent.com/21079031/119007629-fbd91000-b9c3-11eb-9990-161d958f615b.png)

此时只需要按照提示执行命令即可看到帮助文档：

![image](https://user-images.githubusercontent.com/21079031/119007701-0e534980-b9c4-11eb-8e88-6131b94bbab2.png)

完成之后，我们就可以大胆的执行：`s deploy`进行项目部署。

至此，我们完成了一个新手入门的案例。

也许，有人会觉得上面的步骤有些多，好像并不是十分的方便。其实，上面的过程是我们在完全无额外帮助的前提下，仅仅通过一个`s`开始的。如果说我们写文档如何引导大家开始第一个`hello world`呢？

三步开始Serverless devs：
  - 下载Serverless devs：`npm install -g @serverless-devs/s`
  - 初始化项目，并进入到项目文件夹：`s init devsapp/start-fc`
  - 部署项目：`s deploy`

显然三步能说明的问题，我为啥要用上面的整个过程来描述呢？

因为，我们不仅仅希望用户在文档的帮助下，在新手引导文档的帮助下，可以三步开始，我们更希望，开发者可以在任何情况下，哪怕没有文档说明，仅仅通过一个`s`就开始顺利开始自己的Serverless旅程。

在新版的Serverless Devs中，出现的绝大部分错误，都会给出可能的解决方案：

例如Yaml的格式有问题，我们会告诉你出问题的位置，同时也会告诉你要用标准的Yaml格式：
![image](https://user-images.githubusercontent.com/21079031/119010370-91759f00-b9c6-11eb-85d6-c2901f662378.png)


再比如，没有找到你要初始化的案例，会告诉你注意源的配置，并且给你两个可能的解决方案：
![image](https://user-images.githubusercontent.com/21079031/119010576-cb46a580-b9c6-11eb-92f7-a7666a3b43ea.png)

再再再比如，当出现错误，我们都会努力给出引导: 
```
  😈 If you have questions, please tell us: https://github.com/Serverless-Devs/Serverless-Devs/issues
```

我们希望的是，用户在使用Serverless Devs的时候，无论何时，都不会因为出现错误而手忙脚乱，因为“Serverless Devs”和广大的社区开发者，一直就在你的身边，陪伴你解决一切问题，让问题不再是问题。


未来章节预告：
- 《从玩具到生产力 2： 从脚手架到快速部署》
- 《从玩具到生产力 3： 也许Serverless Devs的CI/CD方案更有趣》
- 《从玩具到生产力 4： 拥抱容器，让一切容易》
- 《从玩具到生产力 5： 命令行的可观测性，让“方便”更加“方便”》
- 《从玩具到生产力 6： 吃自己的狗粮》
- 《从玩具到生产力 7： 前端开发神器 Rocket》
- 《从玩具到生产力 8： 简单与感动》

