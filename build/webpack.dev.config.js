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
			template: path.join(__dirname, "../src/index.html")
		}),
		 new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
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
			contentBase: path.join('../dist/'),
			inline: true,
			host: '0.0.0.0',
			port: 8000,
			overlay: {
				errors: true
			},
			hot: true,
			publicPath: '/dist/',
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
			 	}
			 }
		}
	config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
