import path from 'path';
import Koa from 'koa';
import koaStatic from 'koa-static'
import koaViews from 'koa-views'
import appRootPath from 'app-root-path';
import koaBodyparser from 'koa-bodyparser'
import koaRouter from 'koa-router'

// import clientRoute from './middlewares/clientRoute';
const rootPath = appRootPath.path;
const router = koaRouter();

router.get('/',async (ctx)=>{
    await ctx.render('index', {
        title:"sss"
    })
});


const app = new Koa();

app.use(koaBodyparser());
// app.use(views('views',{map:{html:'ejs'}}));
app.use(koaViews(path.resolve(rootPath, 'dist/views'), { map: { html: 'ejs' } }));
app.use(koaStatic(path.resolve(rootPath, 'dist')));
app.use(router.routes(), router.allowedMethods());

app.listen(3000);