var webpack = require("webpack"),
	path = require("path"),
	ResolverPlugin = require('webpack/lib/ResolverPlugin');

module.exports = {
  entry: {
  	js: './js/src/js.js',
  	'js-html5shiv': './js/src/js-html5shiv.js'
  },
  output: {
  	path: './build',
    filename: 'ie8-[name].js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    alias: {
    	selectivizr: __dirname + '/bower_components/selectivizr/selectivizr.js',
    	html5shiv: __dirname + '/node_modules/html5shiv/dist/html5shiv.js'
    }
  },
  plugins: [
    new ResolverPlugin(
        new ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),
    new webpack.optimize.UglifyJsPlugin({ output: {comments: false}})
  ]
};
