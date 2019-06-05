import React from 'react';
import loadable from '@loadable/component'
import { hot } from 'react-hot-loader/root';
// import Test from './Test.js'
// import Loadable  from '$src/tools/loadable.js';
// const Test = Loadable(() => import(/* webpackChunkName: "NotFound" */ './Test.js'));


class UserCenter extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                UserCenter
            </div>
        );
    }
}


export default hot(UserCenter);