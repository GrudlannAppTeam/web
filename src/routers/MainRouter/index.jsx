import React from 'react';
import { Route, Switch} from 'react-router-dom';

import MainLayout from '../../components/MainLayout';
import NotFound from '../../views/NotFound';

const MainRouter = () => {
    return (
        <Switch>
            <MainLayout>
                <Route exact path="/" name="Hello page" component={<div>Strona startowa użytkownika zalogowanego</div>} />
                <Route name="404" component={NotFound}/>
            </MainLayout>
        </Switch>
    );
};

export default MainRouter;