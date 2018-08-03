const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
    `${__dirname}/../src/index.js`,
    'webpack-hot-middleware/client',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}