import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NotFound from '../../views/NotFound';
import Home from '../../views/logged/Home';
import Tasting from '../../views/logged/Tasting';
import Statistics from '../../views/logged/Statistics';
import ReviewForm from '../../views/logged/Reviews/ReviewForm';

const MainRouter = () => {
    return (
        <Switch>
            <Redirect from="/login" to="/" />
            <Route exact path="/" name="Hello page" component={Home} />
            <Route exact path="/tasting" name="Active tasting" component={Tasting} />
            <Route exact path="/statistics" name="statistics" component={Statistics} />
            <Route exact path="/review" name="review" component={ReviewForm}/>
            <Route component={NotFound}/>
        </Switch>
    );
};

export default MainRouter;