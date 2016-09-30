var path = require("path");
var PackageJson = require(path.resolve('./package.json'));
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var wdsConfig = PackageJson.config.wds;

var getWebpackConfig = function (env) {
	var config = {
		entry: {
			index: [path.resolve('./src/layouts/index/index.js')],
			account: [path.resolve('./src/layouts/account/account.js')],
		},
		output: {
			path: path.resolve("./build/assets"),
			filename: "js/[name].js",
		},
		module: {
			loaders: [
				{
					test: /\.js$/,
					loader: "babel-loader",
					query: {
						presets: ['es2015']
					},
					exclude: /node_modules/,
				},
				{
					test: /\.css$/,
					loader: ExtractTextPlugin.extract("style-loader", "css-loader")
				},
				{
					test: /\.scss$/,
					loader: ExtractTextPlugin.extract(
						'style-loader!',
						'css?sourceMap!' + 'sass?sourceMap'
					)
				},
				{
					test: /\.(eot|woff|ttf|svg|png|jpg)$/,
					loader: 'url-loader?limit=5000&name=cache/[name]-[hash].[ext]'
				},
			]
		},
		plugins: [
			new webpack.ProvidePlugin({
        		_: "underscore"
    		}),

			new ExtractTextPlugin("./css/[name].css", {allChunks: true, disable: (env === 'dev')}),

			new webpack.DefinePlugin({
				__PACKAGEJSON__: JSON.stringify(PackageJson),
				__ENV__: JSON.stringify(env)
			}),

			new webpack.NoErrorsPlugin()
		],
	};

	if (env === 'dev') {
		config.devtool = "inline-source-map";
		config.plugins.push(new webpack.HotModuleReplacementPlugin());
		config.wds = wdsConfig;
		config.output.publicPath = wdsConfig.protocol + '://' + wdsConfig.host + ':' + wdsConfig.port + '/';
		config.contentBase = "build";

		config.entry.index.unshift(
			'webpack-dev-server/client?' + config.output.publicPath,
			'webpack/hot/dev-server'
		);	

		config.entry.account.unshift(
			'webpack-dev-server/client?' + config.output.publicPath,
			'webpack/hot/dev-server'
		);

	} else {
		config.plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
	}

	return config;
};

module.exports = getWebpackConfig;