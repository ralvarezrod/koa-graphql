import logger from 'koa-logger';
import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

app.use(logger());

router.get('/', (ctx, next) => {
    ctx.body = 'Hello World!';
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.NODE_ENV === 'test' ? 3001 : 3000;

const server = app.listen(port);
console.log('app listening on port 3000');

export default server;
