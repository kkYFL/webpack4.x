let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const { Hash } = require('crypto');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');  // 抽离CSS插件
let OptimizeCss = require('optimize-css-assets-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');



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
  devServer:{  //开发服务器配置
    port: "3000",
    host:  "localhost",
    progress: true,  //是否显示进度
    // overlay: true,
    contentBase: path.resolve(__dirname,'dist'), // dist目录开启服务
    compress: true                            // 压缩
  },
  mode: 'development',                              // 模式  默认2种  production  development
  entry: path.join(__dirname,'./src/index.js'),     // 入口
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
      filename: 'main.css' //抽离出来的CSS文件名
    })
  ],

  module: { // 模块
    // css-oader 处理css 相关的模块 @import  解析路径等
    // less-loader  less -> css
    // style-loader 把css 插入到head标签中
    // loader 特点：loader功能单一；默认从右向左执行；
    rules: [ //规则
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: { // 用babel-loader  需要把es6-es5
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],  // es 装饰器
              ["@babel/plugin-proposal-class-properties", { "loose": true }],
              "@babel/plugin-transform-runtime"                           // 高级语法处理
            ]
          }
        },
        exclude: /node-modules/
      },
      { // 处理CSS
        test: /\.css$/, 
        use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
      },
      { // 处理less
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader','less-loader']
      }
        // sass    node-sass sass-loader
        // stylus  stylus stylus-loader  CSS预处理器
    ]
  }
}
