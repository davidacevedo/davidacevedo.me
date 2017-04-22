const webpack = require('webpack');

module.exports = {
  entry: [
    `${__dirname}/../src/index.js`,
    'webpack-hot-middleware/client',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}