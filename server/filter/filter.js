import request from 'request'


async function filter (ctx, next) {
    console.log('fliter')
    await next();
}
 export default filter;