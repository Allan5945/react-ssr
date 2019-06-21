import path from 'path';
import Koa from 'koa';
import koaStatic from 'koa-static'
import koaViews from 'koa-views'
import appRootPath from 'app-root-path';
import koaBodyparser from 'koa-bodyparser'
import koaRouter from 'koa-router'
import clientRoute from './middlewares/clientRoute';
import filter from './filter/filter';
import {wsp, wsProxy} from './proxy/proxyWebScoket';


const rootPath = appRootPath.path;
const router = koaRouter();


const app = new Koa();


app.use(koaBodyparser());
app.use(koaViews(path.join(rootPath, 'dist/views'), { map: { html: 'ejs' } }));
app.use(koaStatic(path.join(rootPath, 'dist/')));
app.use(router.routes(), router.allowedMethods());
app.use(filter);
app.use(clientRoute);
app.use(wsp);
app.use(async function (ctx, next) {
    console.log(666);
    ctx.body = "sasasa"
});
const server = app.listen(3000, function () {
    console.log(`服务已经启动：http://localhost:3000/`);
});
server.on('upgrade',wsProxy.upgrade);
