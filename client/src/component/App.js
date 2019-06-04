import React from 'react';
import loadable from '@loadable/component'
import { hot } from 'react-hot-loader/root';
import style from '../style/css/main.css';
import b from '../style/css/b.css';
import c from '../style/css/c.css';
import d from '../style/css/d.css';
// import Test from './Test.js'
// import Loadable  from '$src/tools/loadable.js';
// const Test = Loadable(() => import(/* webpackChunkName: "NotFound" */ './Test.js'));
const Test = loadable(() => import('./Test.js'));


class App extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={style['test']}>
                <div className={b['test']}>777</div>
                <div className={c['test']}>777</div>
                <div className={d['test']}>777</div>
                6666
                <Test></Test>
            </div>
        );
    }
}


export default hot(App);