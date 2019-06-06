import React from 'react';
import { hot } from 'react-hot-loader/root';

class Page1 extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>login-page1</div>
            </div>
        );
    }
}

export default hot(Page1);
