weex的生命周期钩子不多, (仅仅是weex, 不是vue)

| LifeCycle| 描述 |
| :-------------: |:-------------:|
| init      | 组件实例刚刚被创建，组件属性如data计算之前  |
| created | 组件实例创建完成，属性已绑定，但DOM还未生成 |
| ready | 模板编译/挂载之后 |
| destroyed | 组件被销毁后调用 |

所有的生命周期钩子都可以写在< script \>标签中的对应的函数中

```
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