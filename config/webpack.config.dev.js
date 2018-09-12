/**
 * webpack 开发配置
 */

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const paths = require('./paths');
const getClientEnvironment = require('./env');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// common require
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const baseConfig = require('./webpack.config.base');

const publicPath = '/';
const publicUrl = '';
const env = getClientEnvironment(publicUrl);
const cssFilename = 'static/css/[name].[contenthash:8].css';

const devConfig = {
  ...baseConfig,
  devtool: 'cheap-module-source-map',
  entry: [
    require.resolve('./polyfills'),
    require.resolve('react-dev-utils/webpackHotDevClient'),
    paths.appIndexJs,
  ],
  output: {
    pathinfo: true,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: publicPath,
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  plugins: [
    new InterpolateHtmlPlugin(env.raw),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin(env.stringified),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    
    new ExtractTextPlugin({
      filename: cssFilename,
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  performance: {
    hints: false,
  },
};
module.exports = devConfig;