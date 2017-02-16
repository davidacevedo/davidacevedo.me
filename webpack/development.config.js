import webpack from 'webpack';
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: [
    `${__dirname}/../src/index.js`,
    'webpack-hot-middleware/client',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
  ]
}