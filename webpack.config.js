const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { cleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
   entry: './src/js/index.js',
   plugins:[
      new cleanWebpackPlugin(),
      new htmlWebpackPlugin({
         template: 'public/index.html',
         filename: 'index.html'
      })
   ]
};