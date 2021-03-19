const path = require('path');

module.exports = {
	mode: 'production',
	entry: ['./src'],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(svg)$/,
				loader: 'svg-inline-loader', // "url-loader",
				options: {
					limit: Infinity, // everything
				},
			},
		],
	},
	resolve: {
		modules: ['src'],
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index.js',
		library: 'isoCountryFlags',
		libraryTarget: 'umd',
	},
};
