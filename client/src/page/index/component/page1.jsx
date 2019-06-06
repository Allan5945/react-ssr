import React from 'react';
import { hot } from 'react-hot-loader/root';
import b from './../../../style/css/b.css';
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
    test() {
        this.setState({
            listData: [{
                name: "jack",
                age: 9
            }]
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.listData.map((val, key) => {
                        return <div key={key}>name:{val.name} age: {val.age}</div>
                    })
                }
                <div onClick={this.test.bind(this)}>{this.props.name}</div>
                <div className={b['test']}>page1</div>
            </div>
        );
    }
}

export default hot(Page1);
