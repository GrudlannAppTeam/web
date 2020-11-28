import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../views/notLogged/Home';
import Login from '../../views/notLogged/Login';
import Register from '../../views/notLogged/Register';
import ForgotPassword from '../../views/notLogged/ForgotPassword';
import NotFound from '../../views/NotFound';

const AuthRouter = () => {
    return (
        <Switch>
            <Route exact path="/" name="Hello page" component={Home} />
            <Route exact path="/login" name="Sign In Page" component={Login}/>
            <Route exact path="/register" name="Sign Up Page" component={Register}/>
            <Route exact path="/forgotPassword" name="ForgotPasswordPage" component={ForgotPassword}/>
            <Route component={NotFound}/>
        </Switch>
    );
};

export default AuthRouter;