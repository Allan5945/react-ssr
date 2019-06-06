import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import {store} from './../../store';
import {RoutesIndex} from './router/index'

function getConfirmation(message, callback) {
    const allowTransition = window.confirm(message);
    callback(allowTransition);
}
const  Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter;


ReactDOM.render(
    <Provider store={store}>
        <Router
            forceRefresh={!('pushState' in window.history)}
            getUserConfirmation={getConfirmation}
        >
            <RoutesIndex />
        </Router>
    </Provider>,
    document.getElementById('root')
);
