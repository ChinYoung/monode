import Router from 'koa-router';

const router = new Router()

router.post('/list', (ctx, next) => {
  ctx.body = {
    code: 69403,
    message: 'Authorization faliure, try relogin',
    data: {},
  }
  ctx.status = 403
})

export default router