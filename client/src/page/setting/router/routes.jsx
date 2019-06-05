
import Index from '../page/index'
import Login from '../page/login/login.jsx'
import Setting from '../page/setting/setting'
import UserCenter from '../page/userCenter/userCenter'


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
        component: Setting,
        path: '/setting',
        exact: true,
    },
    {
        component: UserCenter,
        path: '/userCenter',
        exact: true,
    },
    {
        component: Index,
        path: '/index',
        exact: true,
        routes: [
        ]
    },
];