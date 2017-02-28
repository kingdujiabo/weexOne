### 基本格式:
```
  //压栈跳转到: xxx页面
    var navigator = require('@weex-module/navigator')
      .......
      onItemClick:function(e){
        var params = {'url':nextUrl,'animated':'true'}
        navigator.push(params, function(e) {
          console.log('i am the callback.')
        });
      }
```
> - params设置路由 (同时包括传值) 和是否执行动画
- navigator.push (params, callback)
- 注意: animated只支持字符串 " true" or "false", 官网说之后会修复

```
//出栈: 跳转回: xxx页面
var navigator = require('@weex-module/navigator')
var params = {
  animated: 'true'
}
navigator.pop(params, function () {
  // callback
})
```

### 由于需要url, 我们的url有很大部分是重复的, 官方给了一个截取的方法
```
//api.js
exports.getBaseUrl = function (bundleUrl, isnav) {
    bundleUrl = new String(bundleUrl);
    var nativeBase;
    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
        nativeBase = 'file://assets/dist/';
    }
    else if (isiOSAssets) {
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    }
    else {
        var host = 'localhost:12580';  
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        if (matches && matches.length >= 2) {
            host = matches[1];
        }

        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
       // in Browser or WebView
        if (typeof window === 'object') {
            nativeBase = isnav ? 'http://' + host + '/index.html?page=./dist/' : '/dist/';
        } else {
            nativeBase = 'http://' + host + '/dist/';
        }
    }

    return nativeBase;
};
```
### 我们使用的时候. 可以现获取当前的url, 然后调用上面的方法, 截取出来基本的路径
```
//可以在created时运行, 直接获取到url
var self = this;
var base = apis.getBaseUrl(self.$getConfig().bundleUrl, true);
this.baseURL = base;
```
>  this. $getConfig().bundleUrl 可以获取当前的Url

使用时:
```
            openSerialDetail: function (id) {
                var vm = this;
                var params = {
                    'url': this.baseURL + 'modules/serial-detail.js?id=' + id,
                    'animated': 'true'
                };
                navigator.push(params, function (e) {
                    //callback
                });
            },
```
>可以看到,路径url拼接 , 和传值,
注意:
  - url拼接是编译后的地址和文件  (serial-detail.js 而不是 serial-detail.we)
  - naviagtor会直接跳转到这个文件生成的页面上

### $getConfig()的其他用法: 获取当前全局环境变量和配置信息。
  - config (object): 配置对象；
    - bundleUrl (string): bundle 的 url；
    - debug (boolean): 是否是调试模式；
    - env (object): 环境对象；
      - weexVersion (string): Weex sdk 版本；
      - appName (string): 应用名字；
      - appVersion (string): 应用版本；
      - platform (string): 平台信息，是 iOS、Android 还是 Web；
      - osVersion (string): 系统版本；
      - deviceModel (string): 设备型号 （仅原生应用）；
      - deviceWidth (number): 设备宽度，默认为 750，满屏是750；
      - deviceHeight (number): 设备高度。
