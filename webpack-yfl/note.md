#### webpack 安装
 - 安装本地的webpack
 - webpack webpack-cli -D

 #### webpack 打包
 - webpack

 #### html loader

 - html-webpack-plugin 安装  

   配置打包文件中的HTML文件

#### 本地化服务

- webpack-dev-server 安装

 开启本地服务，将打包文件加载到内存中，供开发阶段调式


#### css-loader/less-loader/postcss-loader/style-loader 安装
     

#### css-优化压缩/js-优化压缩

  optimize-css-assets-webpack-plugin

  uglifyjs-webpack-plugin

  开发环境不走优化配置


 #### es6->es5

 npm install -D babel-loader @babel/core @babel/preset-env
 
 #### es新增加语法和高级语法的处理
   es7 语法装饰器： @babel/plugin-proposal-decorators
   高级语法处理： @babel/plugin-transform-runtime
   
   问题1：webpack.config.js配置后依然有问题，然后添加并且配置了.babelrc文件
   问题2： "Cannot assign to read only property 'exports' of object '#<Object>'" 
   解决参考：https://github.com/webpack/webpack/issues/11510
   解决参考：https://blog.csdn.net/m0_37686205/article/details/99580526
   问题分析：项目中不同的包代码规范不一commonjs/ES6,两种模式共存引发问题

####  配置eslint 代码检查
    1. 安装  eslint  eslint-loader
    2.配置.eslintrc.json 配置规则检查文件（去官网选择配置下载到项目；手动添加配置，或者选取别人做好的一些配置copy）
    2.webpack.config.js  配置eslint

#### 图片处理
    ##### 图片引入方式：
    1.JS引入 
    2.CSS引入  background('url')
    3.HTML标签引入 <img src="">

    安装: file-loader url-loader html-withimg-loader  小图片url-loader转成base64格式处理否则url-loader调用file-loader处理
    url-loader依赖于file-loader
    html-withimg-loader:处理html src引入的图片
    相关问题：
    1.问题：esModue 
    解决参考：https://segmentfault.com/a/1190000021360248
    2.src引入图片不会被打包？JS文件中的图片可以被打包
    3.图片打包配置问题
    4.路径配置：
    项目中CSS、image等可有自己的打包特定输出路径,资源引用可能会受到影响
    https://juejin.cn/post/6844903700230569992


 #### sourcemap  
      代码映射配置
    

#### watch  打包监控配置


#### webpack 小插件使用
     1. clean-webpack-plugin  清理插件
     2. copyWebpackPlugin     拷贝插件
     3. bannerPlugin  内置     版权声明插件

     clean-webpack-plugin:
     配置过程出现了错误 https://blog.csdn.net/bianliuzhu/article/details/89553021
     分析：不同的版本插件是不断的在提升和改变的，一些API和使用方法和之前不一致

####  webpack proxy 跨域代理的配置


####  webpack 区分不同的环境
      webpack-merge -D    进行不用环境配置文件的合并
      webpack.dev.js      开发环境配置
      webpack.prod.js     线上环境配置
      webpack.config.js   公共基础配置
    
    
#### 配置过程中的问题记录
 1. 配置过程中出现了各种的loader和plugin与webpack版本匹配关系引起的问题,各种问题，然后去GitHub找匹配的版本，挺恶心的
 2. 本来安装的是webpack 4.0.0 的版本，发现该版本有bug，获取了一个4.x较高的版本  😭坑死了，坑太多
 3. 配置postcss-loader  autofixier  出现了版本不匹配的问题：检查各个文件的依赖版本和我们的项目是否冲突
 4. 配置postcss-loader  autofixier  出现了配置结束后不起作用的问题，没有报错，检索原来是browserslist需要配置 😭牛逼呀哭死了，自己蒙着脑袋查了半天，结果百度一下出来了😭   https://www.cnblogs.com/ellen-mylife/p/12408879.html


 

 
 