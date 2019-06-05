import {RoutesIndex as Index} from './../../client/src/page/index/router/index';
import {RoutesIndex as Login} from './../../client/src/page/login/router/index';


export default [
    {
        path: '/index',
        exact: true,
        template: "index",
        component: Index
    },
    {
        path: '/login',
        exact: true,
        template: "login",
        component: Login
    }
];