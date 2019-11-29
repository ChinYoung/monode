import Router from 'koa-router';

const router = new Router()

router.post("/login", (ctx, next) => {
  ctx.body = {
    code: 0,
    data: {
      id: "id"
    }
  }
  ctx.cookies.set("monode", "monode", {expires: new Date(Date.now() + 60 * 1000)})
})


export default router