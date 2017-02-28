### 完整的weex项目的结构包括`template`, `style`, `script`
```
//main.we

<template>
    <div class="read-list" style="flex-direction: column;">
      <top-slider class="top-slider"></top-slider>
    </div>
</template>

<style>
  .read-list {
    margin-left: 20px;
    margin-right: 20px;
  }
  .top-slider{
    flex-direction: row;
    height: 360px;
    width: 750px;
  }
</style>

<script>
    require('weex-components');
    var modal = require('@weex-module/modal');
    var dom = require("@weex-module/dom");
    var animation = require('@weex-module/animation');
    var stream = require('@weex-module/stream');
</script>
```
### 1: `template`里主要写view页面,

标签使用[weex提供的标签组件](https://weex-project.io/cn/references/components/index.html)和 官方扩展组件 [wxc-tabbar](https://weex-project.io/cn/v-0.10/references/wxc/index.html) 和 [wxc-navpage](https://weex-project.io/cn/v-0.10/references/wxc/wxc-navpage.html)

所有的组件和标签都写在`template`中

```
<template>
    <div class="read-list" style="flex-direction: column;">
      <top-slider class="top-slider"></top-slider>
    </div>
</template>
```  
>注意: top-slider是自己定义的组件, 所有的组件文件都在一个文件夹中, 调用时, 直接使用标签就可以调用

```
├── /main.we/                    
├── /movie.we/                    
├── /read.we/                    
└── /top-slider.we/                  
```

### 2: `style`

style和 HTML中一样,直接在标签内书写样式就可以了, 只是注意有些css写法的不同详见`css.md`

```
<style>
  .read-list {
    margin-left: 20px;
    margin-right: 20px;
  }
  .top-slider{
    flex-direction: row;
    height: 360px;
    width: 750px;
  }
</style>
```
### 3: `script`

script标签中主要是数据及逻辑处理, 同时所有的引用也都在此处执行

从[内建模块获取Api](https://weex-project.io/cn/v-0.10/references/modules/index.html)

```
 // script
  require('weex-components');
  var modal = require('@weex-module/modal');
  var dom = require("@weex-module/dom");
  var animation = require('@weex-module/animation');
  var stream = require('@weex-module/stream');
  module.exports = {
     data: {
       //所有的数据都写在这里
     },
     methods: function () {
       //所有的方法函数都写在这里
     },
     init: function () {
       //组件实例刚刚被创建，组件属性如data计算之前执行的函数
     },
     created: function () {
        //组件实例创建完成，属性已绑定，但DOM还未生成时执行的函数, (常用, 比如获取数据, 一般执行刚进入页面就需要执行的函数都可以在此处调用)
     },
     ready: function () {
         //模板编译/挂载之后时执行 (常用, 在页面加载完成之后执行的函数都可以在此处调用)
     },
     destroyed: function () {
       //组件被销毁后调用 (比如切除页面时把定时执行清楚掉)
     }

  }

```
### 4: 组件间通讯
[参考weex组件通讯](http://www.jianshu.com/p/3f61b0a1a530)

### 5: 查找节点, 或者标签属性

##### 获取元素上的属性:
```
function (e) {
    var itemid = e.target.attr.itemid;
    var title = e.target.attr.itemtitle;
}
```

##### 当前上下文中找节点:

1: `$el(id)`

`this.$el(id)` 来找到其背后真实的**原生组件**

2: `$vm(id)`

`this.$vm(id)` 获取的是自定义组件

> 获取父级组件或其上下文
除了可以自上而下寻找组件或其上下文，Weex 也支持自下而上做相同的事情。当前上下文中的 this._parent 可以获取其父级上下文。除了父级上下文，对于父级组件本身，相关处理也可以基于先获取父级上下文，然后在父级组件内部完成更多更细致的处理。更多内容可以深入了解组件间通信的部分。

[参考weex 获取元素的属性, 节点( $el() 与 $vm())](http://www.jianshu.com/p/f496b7a657f6)
