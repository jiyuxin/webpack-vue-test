const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const vueWebpackPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.vue$/, loader: 'vue-loader'},
      {test: /\.css$/, loader: ['style-loader', 'css-loader']}
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new vueWebpackPlugin()
  ],
  devServer: {
    port: '8080',
    host: 'localhost',
    contentBase: path.join(__dirname, './dist/')
  }
}