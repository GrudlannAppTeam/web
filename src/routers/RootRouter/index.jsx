import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AuthRouter from '../AuthRouter';
import MainRouter from '../MainRouter';

const propTypes = {

};

const RootRouter = () => {
    const isUserLoggedIn = false;
    return (
        <Router>
            {
                isUserLoggedIn ? (
                    <MainRouter />
                ) : (
                    <AuthRouter />
                )
            }
        </Router>
    );
};

RootRouter.propTypes = propTypes;

export default RootRouter;