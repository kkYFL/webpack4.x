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
 

#### 配置过程中的问题记录
 1. 配置过程中出现了各种的loader和plugin与webpack版本匹配关系引起的问题,各种问题，然后去GitHub找匹配的版本，挺恶心的
 2. 本来安装的是webpack 4.0.0 的版本，发现该版本有bug，获取了一个4.x较高的版本  😭坑死了，坑太多
 3. 配置postcss-loader  autofixier  出现了版本不匹配的问题：检查各个文件的依赖版本和我们的项目是否冲突
 4. 配置postcss-loader  autofixier  出现了配置结束后不起作用的问题，没有报错，检索原来是browserslist需要配置 😭牛逼呀哭死了，自己蒙着脑袋查了半天，结果百度一下出来了😭   https://www.cnblogs.com/ellen-mylife/p/12408879.html


 

 
 