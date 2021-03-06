---
title: 四、react & html2canvas 生成图片下载实践
date: 2019-12-16
tags:
  - react
  - js
  - html2canvas
---

## html2canvas的选择

现在一般生成图片有前端处理和后端处理两种方式，后端生成的方案不需要前端出力，只需要拿路径渲染，但是会出现数据延时，模板更换困难等问题，出于灵活性和减少后端工作量考虑，我们采取 html2canvas  绘制页面。

 [html2canvas npm](https://www.npmjs.com/package/html2canvas)
 [html2canvas 介绍](http://html2canvas.hertzen.com/)

 <!-- more -->

### 1.在react中的使用

```javascript
    //安装
    npm install --save html2canvas
    or
    yarn add html2canvas

    //引入
    import html2canvas from 'html2canvas';

    //使用
    html2canvas(document.body).then(function(canvas) {
        document.body.appendChild(canvas);
    });

    //如果想生成一部分页面的话，html2canvas可以换成 this.refs.demo
    //<div ref="demo"></div>
```

上面就会把页面简单的绘制出来。

## 2.canvas 下载

```javascript
    html2canvas(this.refs.demo).then(function(canvas) {
        const imgUrl = canvas.toDataURL("image/png"); # 获取图片的url
        const elA = document.createElement("a");
        elA.download = +new Date() + ".png";
        elA.href = imgUrl ;
        elA.click();
        elA.remove();
    });

    //微信中不能下载图片，可以展示图片并提示用户长按保存图片
```

## 3.参考
 [参考1](https://juejin.im/post/5df2e8ab6fb9a0163770816d)
