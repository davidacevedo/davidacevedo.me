const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/../dist`,
  },

  plugins: [
    new Visualizer({
      filename: './statistics.html',
    }),
  ]
}
