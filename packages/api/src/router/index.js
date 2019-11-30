import Router from 'koa-router';
import UserRouter from './user';
import TableRouter from './table';
const router = new Router()
router
  .use('/user', UserRouter.routes())
  .use('/table', TableRouter.routes())

export default router