import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NotFound from '../../views/NotFound';
import Home from '../../views/logged/Home';

const MainRouter = () => {
    return (
        <Switch>
            <Redirect from="/login" to="/" />
            <Route exact path="/" name="Hello page" component={Home} />
            <Route exact path="/" name="Hello page" component={Home} />
            <Route component={NotFound}/>
        </Switch>
    );
};

export default MainRouter;