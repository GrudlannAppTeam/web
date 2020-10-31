import React from 'react';
import { Route, Switch} from 'react-router-dom';

import MainLayout from '../../components/MainLayout';

const MainRouter = () => {
    return (
        <Switch>
            <MainLayout>
                <Route exact path="/" name="Hello page" component={<div>Strona startowa użytkownika zalogowanego</div>} />
            </MainLayout>
        </Switch>
    );
};

export default MainRouter;