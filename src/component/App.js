import React from 'react';
import { hot } from 'react-hot-loader/root';
import style from '../style/css/main.css';
import b from '../style/css/b.css';
import c from '../style/css/c.css';
import d from '../style/css/d.css';
import Loadable  from '$src/tools/loadable.js';
const Test = Loadable(() => import(/* webpackChunkName: "NotFound" */ './Test.js'));



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
                Hello 669996SSSSSSSSS111111111
                <Test></Test>
            </div>
        );
    }
}


export default hot(App);