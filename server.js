import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack/webpack.config';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler,  { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler, { log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000 }));
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.post('/push', (req, res) => {
  console.log(req.body);
  console.log(res.body);
  res.send('hello');
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
