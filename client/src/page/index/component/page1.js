import React from 'react';
import { hot } from 'react-hot-loader/root';

class Page1 extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props)
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
