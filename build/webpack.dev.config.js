const path = require("path")
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConfig = require('./webpack.base.config')

const isDev = process.env.NODE_ENV === 'development'
console.log('isDev is ', isDev)
const config = merge(baseConfig, {
  mode: 'development',
  entry: path.join(__dirname, '../src', 'index'),
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, "../src/index.html"),
      // favicon: '../src/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
})

if (isDev) {
  config.entry = {
      app: [
        'react-hot-loader/patch',
        path.join(__dirname, '../src/index.js')
      ]
    },
    config.devServer = {
      contentBase: path.resolve(__dirname, '../dist/'),
      inline: true,
      host: '0.0.0.0',
      port: 8000,
      overlay: {
        errors: true
      },
      hot: true,
      historyApiFallback: {
        index: '/dist/index.html'
      },

      proxy: {
        '/timeline': {
          target: 'https://timeline-merger-ms.juejin.im/v1',
          pathRewrite: {
            '^/timeline': ''
          },
          changeOrigin: true, // target是域名的话，需要这个参数，
          secure: false, // 设置支持https协议的代理
        },
        '/post': {
          target: 'https://post-storage-api-ms.juejin.im/v1',
          pathRewrite: {
            '^/post': ''
          },
          changeOrigin: true,
          secure: false
        },
        '/comment': {
          target: 'https://comment-wrapper-ms.juejin.im/v1/comments',
          pathRewrite: {
            '^/comment': ''
          },
          changeOrigin: true,
          secure: false
        },
        '/login': {
          target: 'https://juejin.im/auth/type',
          pathRewrite: {
            '^/login': ''
          },
          changeOrigin: true,
          secure: false
        }
      }
    }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
