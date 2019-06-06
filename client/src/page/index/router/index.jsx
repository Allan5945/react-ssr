
import React from 'react';
import {renderRoutes} from 'react-router-config';
import routes from './routes';


class RoutesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-container">
                {renderRoutes(routes,{name: "allan"})}
            </div>
        );
    }
}

export { RoutesIndex, routes };
