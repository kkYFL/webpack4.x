let path = require('path');
let webpack = require('webpack');
module.exports = {
  mode:'development',
  entry:{
    react:['react','react-dom'],  //需要配置库
  },
  output:{
    filename:'_dll_[name].js',   //产生的文件名
    path:path.resolve(__dirname,'dist'),//打包路径
    library:'_dll_[name]',    //产出文件中导出的对象名 _dll_react/_dll_react-dom
    // libraryTarget:'var'  //commjs  var 
   },
   plugins:[
     new webpack.DllPlugin({ // 配置映射文件已经映射文件的名字路径等
       name:'_dll_[name]',   // name === library  备注：name要和liabray保持一致
       path:path.resolve(__dirname,'dist','manifest.json') // 映射文件名以及产生的路径
     })
   ]
}