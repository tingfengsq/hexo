---
title: 五、js 深拷贝与浅拷贝
date: 2019-12-18
tags:
  - 拷贝
  - js
  - 小技巧
---

## 1.基本数据类型和引用数据类型

 数据分为基本数据类型和引用数据类型


 基本数据类型:

 ```javascript
    String、Number、Boolean、Null、Undefined、Symbol、BigInt(?)
 ```

 引用数据类型:

 ```javascript
    Array、Object
 ```

<!-- more -->

## 2.概念
 
 浅拷贝：

 ```javascript
    仅仅复制对象的引用，而不是对象本身
 ```
   
 深拷贝：

 ```javascript
    把复制的对象所引用的全部对象都复制一遍
 ```


简单来说，浅拷贝就是这个人的影子，深拷贝就是复制了这个人。

## 3.方法

 ### 浅拷贝

 ```javascript
    const shallowClone = (obj) => {
        const result = [];
        for (let i in obj) {
            if (obj.hasOwnProperty(i)) {
                result[i] = obj[i];
            }
        }
        return result;
    }
    //Object的 hasOwnProperty()方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。hasOwnProperty()方法来忽略继承属性.
    //object.assign() 把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象
    //Array.prototype.concat() 数组的一个内置方法，用户合并两个或者多个数组，不会改变现有数组，而是返回一个新数组
    //Array.prototype.slice() 数组的一个内置方法，该方法会返回一个新的对象，不会改变原数组 
    //obj展开运算符 [...]
    //以上几种方式也可以
 ```

 ### 深拷贝

 ```javascript
    const deepClone = (obj) => {
        let result = Array.isArray(obj) ? [] : {};
        for( let i in obj ){
            if( obj.hasOwnProperty(i) ){
                if( typeof obj[i] === 'object' &&  obj[i] !== null){
                    result[i] = deepClone(obj[i]) #递归复制
                } else {
                    result[i] = obj[i]
                }
            }
        }
        return result;
    }
    //Object的hasOwnProperty()方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。hasOwnProperty()方法来忽略继承属性
 ```

 JSON.stringfy()和JSON.parse()会忽略undefined、function、symbol，导致属性丢失。