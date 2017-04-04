const path = require('path');

const webpackConfig = {
  context: path.resolve(__dirname, 'test'),
  devtool: 'inline-source-map',
  entry  : {
    spec: './main'
  },
  externals: {
    'cheerio'                       : 'window',
    'react/addons'                  : 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext'        : 'react'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: /node_modules/,
        loader : 'babel-loader',
        options: {
          presets: 'babel-preset-power-assert'
        },
        test: /\.js$/
      },
      {
        exclude: /node_modules/,
        test   : /\.css$/,
        use    : [
          {
            loader: 'style-loader'
          },
          {
            loader : 'css-loader',
            options: {
              modules       : true,
              importLoaders : 1,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        loader: 'json-loader',
        test  : /\.json$/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.spec.js']
  }
};

module.exports = config => {

  config.set({
    basePath  : path.resolve(__dirname),
    frameworks: ['mocha'],
    files     : [
      'test/**/*.spec.js'
    ],
    preprocessors: {
      'test/**/*.js': ['webpack', 'sourcemap']
    },
    webpack      : webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    reporters: ['mocha'],
    logLevel : config.LOG_INFO,
    browsers : ['Chromium', 'PhantomJS', 'Firefox', 'Safari', 'Chrome'],
    singleRun: false
  });

};
