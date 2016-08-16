const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const JsDirectory = `${__dirname}/client/src/javascript`;

const config = {

  context: JsDirectory,

  debug: true,

  devtool: 'source-map',

  entry: {
    application: [
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/dev-server',
      `${JsDirectory}/run.js`
    ]
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(`${__dirname}/serve`),
    publicPath: 'http://localhost:8080/'
  },

  resolve: {
    root: path.resolve(JsDirectory),
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: ['transform-decorators-legacy'],
          presets: ['es2015', 'react', 'react-hmre']
        }
      },

      {
        test: /\.sass$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      },

      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('components-styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/client/src/index.ejs`
    }),
    new webpack.DefinePlugin({
      __ENV__: 'development'
    })
  ]
};


module.exports = config;