
import Page1 from '../component/page1'
import Page2 from '../component/page2'
import A from '../component/a'



export default [
    {
        path: '/index/page1',
        exact: true,
        component: Page1
    },
    {
        path: '/index/page2',
        exact: true,
        component: Page2
    },
    {
        path: '/index',
        exact: true,
        component: Page1
    },
];