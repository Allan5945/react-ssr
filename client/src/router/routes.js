
import Index from '../page/index'
import Login from '../page/login/login.js'


export default [
    {
        path: '/',
        exact: true,
        component: Index
    },
    {
        path: '/login',
        exact: true,
        component: Login
    },
    {
        component: Index,
        path: '/index',
        exact: true,
        routes: [

        ]
    }
];