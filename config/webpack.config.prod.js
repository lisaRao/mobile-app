/**
 * 生产环境 webpack配置
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const paths = require('./paths');
const getClientEnvironment = require('./env');
// common require
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const baseConfig = require('./webpack.config.base');
const publicPath = paths.servedPath;

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

const publicUrl = publicPath.slice(0, -1);

const env = getClientEnvironment(publicUrl);

if (env.stringified['process.env'].NODE_ENV !== '"production"') {
  throw new Error('Production builds must have NODE_ENV=production.');
}


const cssFilename = 'static/css/[name].[contenthash:8].css';

const prodConfig = {
  ...baseConfig,
  bail: true,
  devtool: shouldUseSourceMap ? 'source-map' : false,
  entry: [require.resolve('./polyfills'), paths.appIndexJs],
  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath: publicPath,
    devtoolModuleFilenameTemplate: info =>
      path
        .relative(paths.appSrc, info.absoluteResourcePath)
        .replace(/\\/g, '/'),
  },
  plugins: [
    new InterpolateHtmlPlugin(env.raw),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.DefinePlugin(env.stringified),
    // Minify the code.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        comparisons: false,
      },
      mangle: {
        safari10: true,
      },
      output: {
        comments: false,
        ascii_only: true,
      },
      sourceMap: shouldUseSourceMap,
    }),
    new ExtractTextPlugin({
      filename: cssFilename,
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    // new SWPrecacheWebpackPlugin({
    //   dontCacheBustUrlsMatching: /\.\w{8}\./,
    //   filename: 'service-worker.js',
    //   logger(message) {
    //     if (message.indexOf('Total precache size is') === 0) {
    //       return;
    //     }
    //     if (message.indexOf('Skipping static resource') === 0) {
    //       return;
    //     }
    //     console.log(message);
    //   },
    //   minify: true,
    //   navigateFallback: publicUrl + '/index.html',
    //   navigateFallbackWhitelist: [/^(?!\/__).*/],
    //   staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    // }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
};

module.exports = prodConfig;

