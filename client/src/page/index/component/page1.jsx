import React from 'react';
import { hot } from 'react-hot-loader/root';
import {store} from './../../../store';

class Page1 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>{this.props.name}</div>
                <div>page</div>
            </div>
        );
    }
}

export default hot(Page1);
