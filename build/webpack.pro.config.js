const path = require("path")
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const baseConfig = require('./webpack.base.config')

const config = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, "../src/index.html"),
      // favicon: '../src/favicon.ico'
    }),
    // new FaviconsWebpackPlugin('../src/images/to-top.png'),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
  ]
})


module.exports = config
