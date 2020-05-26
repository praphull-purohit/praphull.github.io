const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const webpack = require('webpack');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	entry: {
		app: ['./src/app.js']
	},
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte')
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	output: {
		path: __dirname + '/assets',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						hotReload: true
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader'
				]
			},
			{
                  test: /\.scss$/,
                  use: [
                      MiniCssExtractPlugin.loader,
                      {
                        loader: 'css-loader'
                      },
                      {
                        loader: 'sass-loader',
                        options: {
                          sourceMap: true,
                          // options...
                        }
                      }
                    ]
                }
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),

//		new ExtractTextPlugin('css/[name].css'),

//		new CleanWebpackPlugin(),
//		new webpack.ProgressPlugin(),
	],
	optimization: {
	  splitChunks: {
        // include all types of chunks
        chunks: 'all'
      }
	},
	devtool: prod ? false: 'source-map'
};
