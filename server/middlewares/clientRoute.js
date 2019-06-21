import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderToStaticMarkup } from 'react-dom/server';
import {store} from './../../client/src/store';
import routes from './router';



async function clientRoute(ctx, next) {
    let isPage = false;
    for (let item of routes) {
        if (ctx.url.startsWith(item.path)) {
            isPage = true;
            await ctx.render(item.template, {
                root: renderToStaticMarkup(
                    <Provider store={store}>
                        <StaticRouter location={ctx.url}>
                            <item.component role={store.getState().role} />
                        </StaticRouter>
                    </Provider>
                )
            });
            break;
        }
    }
    if (!isPage) {
        await next();
    }
}

export default clientRoute;
