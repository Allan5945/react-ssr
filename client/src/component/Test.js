import React from 'react';
import { hot } from 'react-hot-loader/root';
import s from '../style/scss/s.scss';
import l from '../style/less/s.less';

class Test extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className={s['test1']}> Hello 222233333333</div>
                <div className={l['test2']}> Hello 222233333333</div>
            </div>
        );
    }
}

export default hot(Test);
