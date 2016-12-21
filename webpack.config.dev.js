const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const browserSyncConfig = require('./bs-config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry  : {
    app: './main'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader : 'babel-loader',
        test   : /\.js$/
      },
      {
        exclude: /node_modules/,
        loader : ExtractTextPlugin.extract({
          'fallback-loader': 'style-loader?sourceMap',
          'loader'         : 'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!postcss-loader'
        }),
        test: /\.css$/
      }
    ]
  },
  output: {
    filename: '[name].js',
    path    : path.join(__dirname, 'dist', 'assets')
  },
  plugins: [
    new BrowserSyncPlugin(browserSyncConfig),
    new ExtractTextPlugin({
      allChunks: true,
      filename : '[name].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.css']
  }
};
