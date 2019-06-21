import proxy from 'http-proxy-middleware';
const k2c = require('koa2-connect');



const wsProxy = proxy('/wsProxy', {
    target: 'http://192.168.10.183/',
    pathRewrite: {'^/wsProxy/scoket': '/scoket', '^/wsProxy/test': '/css/cdaca98d.index.css'},
    ws: true,
    changeOrigin: true,
});

const wsProxy1 = proxy('/ss', {
    target: 'http://www.baidu.com/',
    pathRewrite: {'^/ss/ss': '/img/bd_logo1.png'},
    ws: true,
    changeOrigin: true,
});


async function wsp(ctx, next) {

    if (ctx.url.startsWith('/ss')) {
        ctx.respond = false;
        await k2c(wsProxy1)(ctx,next);
        return false;
    }
    if (ctx.url.startsWith('/wsProxy')) { 
        ctx.respond = false;     
        await k2c(wsProxy)(ctx,next);
        return false;
    }
    await next()
}


export {wsp, wsProxy };