const path = require('path');

const webpackConfig = {
  context: path.resolve(__dirname, 'src'),
  devtool: 'inline-source-map',
  entry  : {
    spec: './test'
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
        exclude: /node_modules/,
        loader : 'awesome-typescript-loader',
        test   : /\.tsx?$/
      },
      {
        enforce: 'post',
        test: /\.spec\.*/,
        loader: "webpack-espower-loader"
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
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  }
};

const browsers = process.env.TRAVIS ? ['PhantomJS'] : ['Chromium', 'PhantomJS', 'Firefox', 'Safari', 'Chrome']

module.exports = config => {

  config.set({
    basePath  : path.resolve(__dirname),
    frameworks: ['mocha'],
    files     : [
      'src/**/*.spec.*'
    ],
    preprocessors: {
      'src/**/*.spec.*': ['webpack', 'sourcemap']
    },
    webpack      : webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    reporters: ['mocha'],
    logLevel : config.LOG_INFO,
    browsers : browsers,
    singleRun: false
  });

};
