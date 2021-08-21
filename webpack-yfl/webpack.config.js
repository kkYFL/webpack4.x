let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const { Hash } = require('crypto');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');  // 抽离CSS插件
let OptimizeCss = require('optimize-css-assets-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  optimization:{ // 优化项
    minimizer:[
      new UglifyJsPlugin({
        cache: true, // 是否使用缓存
        parallel: true, // 使用并发打包
        sourceMap: true  // 源码映射
      }),
      new OptimizeCss()
    ]
  },
  devServer:{     //开发服务器配置
    port: "3000",
    host:  "localhost",
    progress: true,  //是否显示进度
    // overlay: true,
    contentBase: path.resolve(__dirname,'dist'), // dist目录开启服务
    compress: true,                            // 压缩
    open: true,
    proxy:{
      // '/api':'http://localhost:5000' // 配置一个代理
      '/person/more/userinfo':{   //  配置代理 并且重写路径
        target: 'http://localhost:5000',
        pathRewrite: {'/person/more':''}
      }
    }
  },
  mode: 'development',                              // 模式  默认2种  production  development
  entry: path.join(__dirname,'./src/index.js'),     // 入口
  // 源码映射
  // 1. devtool:'source-map', 源码映射 会单独产生一个sourcemap文件，报错后 ，会标识 ，当前错误的列和行
  // 2. devtool:'eval-source-map', 不会单独产生一个sourcemap文件，报错后 ，会标识 ，当前错误的列和行
  // 3. devtool:'cheap-module-source-map', 会产生单独的映射文件，报错后 ， 不产生列
  // 4. devtool: 'chap-module-eval-source-map', 不会产生单独的映射文件，不会产生列
  devtool:'source-map',
  watch:true,
  watchOptions: { // 监控选项
    ignored: /node-modules/   //需要忽略的文件
  },
  output: {
    // filename: 'index.[hash:8].js',                          // 打包后的文件名
    filename: 'index.js',                          // 打包后的文件名
    path: path.join(__dirname,'dist'),              // 路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',                // 模板文件
      filename: 'index.html'                       // 文件名字
      // minify: {// html 压缩
      //   removeAttributeQuotes: true,  //移除HTML中的双引号
      //   collapseWhitespace: true     //折叠HTML文本为一行
      // },
      // Hash: true                     //HTML 中引用文件添加hash值
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css' //抽离出来的CSS文件名
    }),
    new CleanWebpackPlugin(),  //默认清空打包文件目录
  ],

  module: { // 模块
    // css-oader 处理css 相关的模块 @import  解析路径等
    // less-loader  less -> css
    // style-loader 把css 插入到head标签中
    // loader 特点：loader功能单一；默认从右向左执行；从下到上执行
    noParse:/jquery/,  // 不去解析jQuery中的依赖库（对于我们属于的比较独立的依赖库可以不去解析，是一种优化手段）
    rules: [ //规则
      // { // eslint
      //   test:/\.js$/,
      //   use:{
      //     loader:'eslint-loader',
      //     options: {
      //       enforce: 'pre' // previous 优先执行
      //     }
      //   }
      // },
      {
        test: /\.html$/,
        use: 'html-withimg-loader'
      },
      {
        test:/\.(png|jpg|jpeg|gif)$/,
        //  url-loader 做一个限制 当图片小于XKB的时候，用base64处理
        //  否则用file-loader产生真实图片
        use:{
          loader: 'url-loader',
          options:{
            esModule: false,
            name: '[name].[ext]',
            limit: 10240,
            outputPath: 'images/'  //图片打包路径
          }
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: { // 用babel-loader  需要把es6-es5
            presets: [
              '@babel/preset-env',
              "@babel/preset-react"
            ],
            sourceType: 'unambiguous',
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],  // es 装饰器
              ["@babel/plugin-proposal-class-properties", { "loose": true }],
              "@babel/plugin-transform-runtime"                           // 高级语法处理
            ]
          }
        },
        exclude: /node-modules/,       // 排除
        include: path.resolve('src')   // 包含
      },
      { // 处理CSS
        test: /\.css$/, 
        use: [{loader:MiniCssExtractPlugin.loader,options:{publicPath:'../'}},'css-loader','postcss-loader']
      },
      { // 处理less
        test: /\.less$/,
        use: [{loader:MiniCssExtractPlugin.loader,options:{publicPath:'../'}},'css-loader','postcss-loader','less-loader'],
      }
        // sass    node-sass sass-loader
        // stylus  stylus stylus-loader  CSS预处理器
    ]
  }
}
