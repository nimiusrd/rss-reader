const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry  : {
    app: './main'
  },
  externals: {
    'react'    : 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader : 'awesome-typescript-loader',
        test   : /\.tsx?$/
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        exclude: /node_modules/,
        loader : ExtractTextPlugin.extract({
          'fallback-loader': 'style-loader',
          'loader'         : 'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!postcss-loader'
        }),
        test: /\.css$/
      }
    ]
  },
  output: {
    filename: '[name].js',
    path    : path.join(__dirname, 'dist', 'assets/')
  },
  plugins: [
    new ExtractTextPlugin({
      allChunks: true,
      filename : '[name].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.css', '.ts', '.tsx']
  }
};
