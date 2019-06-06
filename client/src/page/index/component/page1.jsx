import React from 'react';
import { hot } from 'react-hot-loader/root';
import {store} from './../../../store';

class Page1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name:'test',
            listData: [
                {
                    name: "allan",
                    age: 8
                }
            ]
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.listData.map((val, key) => {
                        return <div key={key}>name:{val.name} age: {val.age}</div>
                    })
                }
                <div>{this.props.name}</div>
                <div>page1</div>
            </div>
        );
    }
}

export default hot(Page1);
