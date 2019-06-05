import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderToStaticMarkup } from 'react-dom/server';
import {store} from './../../client/src/store';
import routes from './router';



async function clientRoute(ctx, next) {

    for (let item of routes) {
        if (item.path === ctx.url) {
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
    await next();
}

export default clientRoute;
