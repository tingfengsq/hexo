---
title: 阿里开源的抓包工具"AnyProxy"
date: 2020-1-2
tags:
  - AnyProxy
---

今天来推荐一个方便的抓包工具[AnyProxy](https://anyproxy.io/)，个人感觉是比Fiddler方便的。

![ ](/images/anyproxy1.png)

<!-- more -->

这货是基于Node.js开发的，所以使用之前需要先去装一下[node](http://nodejs.cn/)环境，然后用npm安装这个东西：
```bash
        npm install -g anyproxy
```
安装后就可以直接使用 anyproxy 来启动他了：


![ ](/images/anyproxy2.png)


启动后他会监听8001端口，你只需把要代理的设备端口改成8001就可以抓取上网数据了，并且在127.0.0.1:8002来访问你的上网请求数据：


![ ](/images/anyproxy3.png)


如果你要抓取手机的上网请求那么就需要去手机WIFI那里设置一下代理IP，先看下本机IP：


![ ](/images/anyproxy4.png)

然后在手机上设置上ip代理就好了：

![ ](/images/anyproxy5.png)

配置好是这样的界面就大功告成了

![](/images/anyproxy6.png)




