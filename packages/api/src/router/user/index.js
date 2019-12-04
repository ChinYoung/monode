import Router from 'koa-router';
import User from './userModal';

const router = new Router()

router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body
  const userList = await User.getUser(username, password)
  if (userList.length) {
    ctx.body = {
      code: 0,
      message: 'welcome',
      data: {
        token: 'monode'
      }
    }
  } else {
    ctx.body = {
      code: 0,
      message: '用户名或密码错误',
      data: {}
    }
  }
})

export default router