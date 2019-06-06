
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routes from './routes';



class RoutesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-container">
                <Switch>
                    {renderRoutes(routes)}
                </Switch>
            </div>
        );
    }
}

export { RoutesIndex, routes };
