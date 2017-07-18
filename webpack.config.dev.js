const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry  : {
    app: './main',
    firebase: './firebase'
  },
  externals: {
    'react'    : 'React',
    'react-dom': 'ReactDOM'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test   : /\.tsx?$/,
        use : 'awesome-typescript-loader'
      },
      {
        enforce: "pre",
        test: /\.js$/,
        use: "source-map-loader"
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        use : ExtractTextPlugin.extract({
          fallback: 'style-loader?sourceMap',
          use: 'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!postcss-loader'
        })
      }
    ]
  },
  output: {
    filename: '[name].js',
    path    : path.join(__dirname, 'dist', 'assets')
  },
  plugins: [
    new ExtractTextPlugin({
      allChunks: true,
      filename : '[name].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  }
};
