import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import {renderRoutes} from 'react-router-config';
import routes from './router/routes';
import {store} from './store';

function getConfirmation(message, callback) {
    const allowTransition = window.confirm(message);
    callback(allowTransition);
}
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter
            forceRefresh={!('pushState' in window.history)}
            getUserConfirmation={getConfirmation}
        >
            {renderRoutes(routes)}

        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
