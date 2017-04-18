const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/../dist`,
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new Visualizer({
      filename: './statistics.html',
    }),
  ]
}
