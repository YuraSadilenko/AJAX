const path = require('path'); //npm install -D webpack webpack-cli
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	mode: 'production', // 'development' || 'production' 
	entry:  {
		script1: './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader', //run npm install -D babel-loader @babel/core @babel/preset-env
				options: {
					presets: ['@babel/env']
				}
			}
		]
	},
	watch: true,
};
