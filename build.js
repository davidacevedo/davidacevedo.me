const webpack = require('webpack');
const webpackConfig = require('./webpack/webpack.config');

const compiler = webpack(webpackConfig, (err, stats) => {});
