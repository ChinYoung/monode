import Koa from 'koa';
import webpack from 'webpack';
import { devMiddleware } from 'koa-webpack-middleware';
import webpackConfig from '../../page/webpack.dev.js';
import Static from 'koa-static';
import path from 'path';
import Config from '../lib/config';
import Router from './router';
import bodyparser from 'koa-bodyparser';

const app = new Koa()

app.use(async (ctx, next) => {
  console.log(ctx.request)
  await next()
})

const config = Config.getConfig()
app.getConfig = Config.getConfig

app.use(Static(path.resolve(__dirname, "../static")))

app.use(bodyparser())

if ('development' === process.env.NODE_ENV) {
  const compiler = webpack(webpackConfig)
  app.use(devMiddleware(compiler, {publicPath: "/"}))
}

app.use(Router.routes())

const PORT = config.get('PORT')

export default app