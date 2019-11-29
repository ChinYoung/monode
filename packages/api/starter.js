import app from './src';
import webpack from 'webpack';
import { devMiddleware } from 'koa-webpack-middleware';
import config from '../page/webpack.dev.js';
import Static from 'koa-static';
import path from 'path';

const compiler = webpack(config)

app.use(Static(path.resolve(__dirname, "static")))
app.use(devMiddleware(compiler, {publicPath: "/"}))

app.listen(3000, _ => console.log("server started"))