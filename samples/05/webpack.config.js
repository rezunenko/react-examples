var webpack = require('webpack');

module.exports = {
	entry: "./main.js",
	output: {
		path: __dirname + '/public/build/',
		publicPath: "build/",
		filename: "bundle.js"
	}
}