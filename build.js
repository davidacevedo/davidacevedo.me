import webpack from 'webpack';
import webpackConfig from './webpack/webpack.config';

const compiler = webpack(webpackConfig, (err, stats) => {});
