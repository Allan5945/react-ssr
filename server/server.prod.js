import path from 'path';
import Koa from 'koa';
import koaStatic from 'koa-static'
import koaViews from 'koa-views'
import appRootPath from 'app-root-path';
import koaBodyparser from 'koa-bodyparser'
import koaRouter from 'koa-router'
import clientRoute from './middlewares/clientRoute';


const rootPath = appRootPath.path;
const router = koaRouter();



const app = new Koa();


app.use(koaBodyparser());
app.use(koaViews(path.join(rootPath, 'dist/views'), { map: { html: 'ejs' } }));
app.use(koaStatic(path.join(rootPath, 'dist/')));
app.use(router.routes(), router.allowedMethods());
app.use(clientRoute);
app.listen(3000);