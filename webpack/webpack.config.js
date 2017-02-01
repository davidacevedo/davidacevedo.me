import path from 'path';
import webpack from 'webpack';

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    __dirname + '/../src/index.js',
  ],
  
  output: {
    filename: 'bundle.js',
    path: '/public',
    publicPath: '/',
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.jsx', '.js', '.json', '.scss'],
    alias: {
      components: `${__dirname}/../src/components`,
      containers: `${__dirname}/../src/containers`,
      styles: `${__dirname}/../src/styles`,
    }
  },

  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[path][name]--[local]',
          {
            loader: 'postcss-loader',
            options: {
              config: `${__dirname}/postcss.config.js`
            }
          },
          'resolve-url-loader',
          'sass-loader?sourceMap',
        ],
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      sassLoader: {
        includePaths: [path.resolve(__dirname, '../src')],
      }
    }),
    new webpack.HotModuleReplacementPlugin(),

  ],
}