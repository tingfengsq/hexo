---
title: 三、一些自己在使用css、js技巧
date: 2019-12-12
tags:
  - css
  - js
  - 小技巧
---

## CSS

<!-- more -->

1.省略：

```javascript
    //单行省略
    width: 100px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    //多行省略
    width: 100px;
    height:50px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;  //块元素显示的文本的行数。
    -webkit-box-orient: vertical;
```


2.下箭头
![](/images/two.png)
```javascript
    width: 7px;
    height: 7px;
    border-bottom: 2px solid #bdbdbd;
    border-right: 2px solid #bdbdbd;
    transform: rotate(45deg);
```

3.更换谷歌滚动条样式：
```javascript
    ::-webkit-scrollbar-thumb{}    //更改谷歌滚动条样式
    ::-webkit-scrollbar{}   //更改谷歌滚动条背景样式
```

4.改变placeholder的颜色

```javascript
    ::-moz-placeholder { color: #CDCDCD; }
    ::-webkit-input-placeholder { color:#CDCDCD; }
    :-ms-input-placeholder { color:#CDCDCD; }
```

5.阴影：

```javascript
    //左
    box-shadow: -7px 0 5px -5px #333;
    //右
    box-shadow: 7px 0 5px -5px #333;
    //上
    box-shadow: 0px -7px 5px -5px #333;
    //下
    box-shadow: 0px 7px 5px -5px #333;
```
![](/images/three.png)

6.单行文字居中，多行文字居左

方法1：(推荐)
```javascript
    .text{
        display: flex;
        justify-content: center;
    }
```

方法2：
```javascript
    .text{
        display: inline-block;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
```

方法3：
```javascript
    // html
    <div class="content">
        <span class="text">单行文字居中，多行文字居左。单行文字居中，多行文字居左。单行文字居中，多行文字居左。</span>
    </div>

    // css
    .content{
        text-align: center;
    }
    .text{
        display: inline-block;
        text-align: left;
    }

    // 原理
    //对于一个元素，如果其display属性值是inline-block，那么其宽度由内部元素决定，但永远小于“包含块”容器的尺寸，也就是“包裹性（shrink-to-fit）”
```






## JS

1.判断 val 是否存在
```javascript
    for(let item in data){
        if(!data[item]){
            data[item] = '--';
        }
    }
```

2.上传图片回填

```javascript
    let reads = new FileReader();
    reads.readAsDataURL(files);
    reads.onload = function(e) {
        document.getElementById('ID').src = this.result;
    };
```
3.获取url参数

```javascript
    function getParams (name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
```

4.更改url参数
```javascript
function replaceParamVal(paramName,replaceWith) {
    var oUrl = window.location.href.toString();
    var re = evil('/('+ paramName+'=)([^&]*)/gi');
    var nUrl = oUrl.replace(re,paramName+'='+replaceWith);
    this.location = nUrl;
    window.location.href=nUrl
}

function evil(fn) {
    let Fn = Function; //一个变量指向Function，防止有些前端编译工具报错
    return new Fn('return ' + fn)();

}

```

5.ios window.history.back() 致使 localStorage不同步
```javascript
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    }
```

6.判断对象是否存在

```javascript
    const page = {
        user:'111',
        cityInfo:{
            city:'hz',
            code:'111'
        }
    };
    const name = ( (page || {}).cityInfo || {} ).city || '111';
    console.log(name)
```
7.textatea 高度自适应

```javascript
    //jq:
    el.on('input', function () {
        const height =  $(this).scrollTop() + $(this).prop("scrollHeight") + "px";
        $(this).height(height)
    })

    //react :
    const el = this.refs.remark;
    el.style.height = 'auto';  
    if(el.scrollHeight >=el.offsetHeight){   #如果高度不够，再重新设置
        el.style.height = el.scrollHeight + 'px'
    }
```

8.查找重复字符

```javascript
    let red= 'hjqjbsaxhhhh'; 
    let obj = {};
    for (var i = 0; i<red.length; i++) { 
        obj[red[i]] = ++obj[red[i]] || 1 ;
        console.log(red[i]) 
    }
```

9.安卓键盘置顶按钮(安卓会出现键盘出来,按钮在下面没上来的情况)

```javascript
    function  handleSetBtnPosition(){
        let win_h = $(window).height();
        window.addEventListener('resize', function () {
            var u = navigator.userAgent;
            if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {         
                if($(window).height() < win_h){
                    $("#submit_btn").hide();
                }else{
                    $("#submit_btn").show();
                }
            }
        });
    }
```

10.自动添加空格

```javascript
 "13116700755".replace(/(?<=^\d{3}(\d{4})*)(?!$)/g, ' ') ---> "131 1670 0755"
```


