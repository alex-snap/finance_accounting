const gulp = require('gulp');
const webpack = require('webpack');

const config = require('../config');

/**
 * Run webpack dev server
 */
gulp.task('webpack:dev', function (callback) {
  const WebpackDevServer = require('webpack-dev-server');
  const compile = webpack(config.webpackDevConfig);
  const server = new WebpackDevServer(compile, {
    hot: true,
    contentBase: 'serve',
    historyApiFallback: true,
    stats: { colors: true }
  });
  server.listen(8080, 'localhost', () => {});
  callback();
});

/**
 * todo build
 * Build
 */
//gulp.task('webpack:build', function (callback) {
//  webpack(config.webpackProdConfig);
//  callback();
//});