import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import Index from './../../client/src/page/index/index.js'

async function clientRoute(ctx, next) {
    await ctx.render('index', {
        root: renderToStaticMarkup(
            <Index/>
        )
    });
    await next();
}

export default clientRoute;
