import React from 'react';
import loadable from '@loadable/component'
import { NavLink } from "react-router-dom";
import { hot } from 'react-hot-loader/root';
// import Test from './Test.js'
// import Loadable  from '$src/tools/loadable.js';
// const Test = loadable(() => import('$src/component/App.js'));


class Index extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <NavLink to="/login">to - login</NavLink>
            </div>
        );
    }
}


export default hot(Index);