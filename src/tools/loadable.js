import React,{Component} from 'react';


const Loadable = (loadComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                Component: null,
            }
        }
        componentWillMount() {
            if (this.hasLoadedComponent()) {
                return;
            }
            loadComponent()
                .then((cmp) => {
                    this.setState({
                        Component: cmp.default
                    })
                })
        }


        hasLoadedComponent() {
            return this.state.Component !== null;
        }

        render() {
            let {Component} = this.state;
            return Component ? <Component {...this.props} /> : null;
        }
    }
}

export default Loadable;



