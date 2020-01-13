---
title: 九、nginx缓存的开启和关闭
date: 2019-12-27
tags:
  - nginx
---
在网站程序调试的时候，经常会遇到浏览器的缓存问题导致修改过的前端代码无效果。每次通过Ctrl+F5强制刷新后才能清掉缓存。这时如果禁用掉nginx缓存，可以减少一些小麻烦，让浏览器每次到服务器去请求文件，而不是在浏览器中读取缓存文件。

当程序调试好上线后，可以开启nginx缓存，节省服务器的带宽流量，减少一些请求，降低服务器的压力。


<!-- more -->

  通过配置nginx的配置文件/usr/local/nginx/conf/nginx.conf实现开关效果


##  启用缓存
    
  location ~ .*\.(gif|jpg|jpeg|png|bmp|swf|js|css)$ {
  #设置缓存上面定义的后缀文件缓存到浏览器的生存时间
  expires   3d;
  }

## 关闭缓存

  location ~ .*\.(gif|jpg|jpeg|png|bmp|swf|js|css)$ {
  #禁止缓存，每次都从服务器请求
  add_header Cache-Control no-store;  
