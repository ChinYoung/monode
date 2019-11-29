import Koa from 'koa';
import router from './router';

const app = new Koa()

app.use(async (ctx, next) => {
  console.log(ctx.request)
  await next()
})

app.use(router.routes())


export default app