let  { merge } = require('webpack-merge');
let base = require('./webpack.config.js');

module.exports = merge(base,{
  mode:'production'
});