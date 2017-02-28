###### 为了便于调试和项目打包, 需要全局安装 `weex-toolkit` 和 `weexpack`
- 安装前请确保安装 `node.js`, 且版本要 `6+`
- 同时请安装 `npm`

###### 1:  `weex-toolkit`
  weex-toolkit 可以初始化项目, 但是初始化的项目是针对开发单个 Weex 页面而设计的，也就是说这样的项目只包括单个页面开发需要的东西，比如前端页面源文件、webpack 配置、npm 脚本等。项目产生的输出就是一个 JS Bundle 文件，可以自由的进行部署
  >  npm install -g weex-toolkit

weex-toolkit安装好后,可以使用它初始个单页面的项目(`注意不是初始化一个项目`)

执行顺序:
```
 weex init weexOne              //初始化一个名字叫做weexOne单页面
 npm install                   // 安装依赖包
 npm run build                 // 入口文件会构建到 dist 目录中
 npm run dev                  //开启监听模式, 自动更新代码,页面 和dist文件
 npm run serve                // 开启服务器       
```

调试页面:

- 首先下载weex的[Playground App](https://alibaba.github.io/weex/download.html), 安装到手机,
- 安装好后保持手机和电脑在同一网段, (手机连接wifi)
- 执行下面命令后, 再打开的页面中使用手机扫码
- 在页面上选择 Debugger  或者 Inspector

```
weex debug                  //开启调试
```
[具体详情请看](http://www.jianshu.com/p/aa81077e54f9)

###### 2: `weexpack`
weex-pack 是初始化一个完整的 App 工程，包括 Android 和 iOS 的整个 App 起步，前端页面只是其中的一部分。这样的项目最终产出是一个 Android App 和一个 iOS App。
[weexpack的详细介绍可以看这个](http://www.jianshu.com/p/674efb2468e4)

1: 全局安装`weexpack`
> npm  install weexpack -g

2: 生成weex项目
>weexpack create 项目名字

**注意:** 此时创建的工程默认不包含 ios 和 android 工程模版

3: 安装依赖
> npm install

4: 安装应用模板 生成 android 或者 ios 工程

`android`
> weexpack platform add android

`ios`
>weexpack platform add ios

执行完成后会在platforms文件夹下生成android或者ios文件目录

5: 打包apk
  - `android`
> weexpack run android

    - 注意:`android.config.json` 或者 `ios.config.json`中的信息
      - `AppName:` 生成的apk安装后的应用名
      -  `AppId: `application_id 包名
      -  `SplashText:` 打开后欢迎页上面的展示文字
      - `WeexBundle: `指定的weex bundle文件（支持文件名和url的形式）
      文件名则以本地文件的方式加载bundle,url则以远程的方式加载bundle 如果以本地方式指定bundle .we文件请放到src目录。

- `ios`打包

  - 模拟器运行
    > weexpack run ios

  - 构建ipa包
  > weexpack build ios

    构建包的过程中，将会提示让您输入CodeSign（证书）
，Profile(provisioning profile),AppId，只有输入真实的这些信息才能成功打包。 其余如AppName,和入口weex bundle文件可以编辑项目目录下的ios.config.json配置。 打完包成功之后，可以在/playground/build/ipa_build/目录下获取ipa文件
**注：证书需要预先安装到keychain中，在keychain中点击右键获取证书id（证书名称），provisioning profile文件（*mobileprovision）需要获取UUID，进入[目录](https://github.com/weexteam/weex-pack/tree/dev/generator/platforms/templates) 可以看到mobileprovision_UUID.sh文件，此文件可以获取到UUID**
mobileprovision_UUID.sh用法如下： $ ./mobileprovision_UUID.sh   \*mobileprovision
 参数（\*mobileprovision）为provisioning profile文件路径

6: html5打包

> weexpack build web

  这样你可以把打包后的资源上传到cdn服务器，然后上线你的web项目。

- 在html5平台上运行
  > weexpack run web
