var webpack = require('webpack');
var path = require('path');
var htmlPlugin = require('html-webpack-plugin');
var extractTextWebpackPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new extractTextWebpackPlugin({
  filename: 'index.css'
})
var dir_dist = path.resolve(__dirname,'dist');
var dir_src = path.resolve(__dirname,'src');

module.exports = {
  entry: dir_src + '/index.js',
  output: {
    path: dir_dist,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader:'babel-loader',
            options: {
              compact: true,
              presets: ['env','react','stage-2']
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.scss/,
        use: extractPlugin.extract({
          use:['css-loader','sass-loader']
        })
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins:[
    extractPlugin,
    new htmlPlugin({
      template: 'src/index.html'
    })
  ]
}
