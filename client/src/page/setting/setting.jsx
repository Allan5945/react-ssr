import React from 'react';
import loadable from '@loadable/component'
import { hot } from 'react-hot-loader/root';
// import Test from './Test.js'
// import Loadable  from '$src/tools/loadable.js';
// const Test = Loadable(() => import(/* webpackChunkName: "NotFound" */ './Test.js'));


class Setting extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                Setting
            </div>
        );
    }
}


export default hot(Setting);