const path = require('path');

module.exports = {
	mode: 'production', // 'development' || 'production' 
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
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
	watch: true
};