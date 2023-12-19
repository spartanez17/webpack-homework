const path = require('node:path');

module.exports = {
	devtool: false,
	mode: 'development',

	// ...ваш конфиг
	entry: {
		app: './src/app.js',
		home: {
			import: './src/pages/home.js',
			dependOn: 'vendor'
		},
		login: './src/pages/login.js',
		vendor: ['react', 'react-dom'],
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve('./build')
	}
}
