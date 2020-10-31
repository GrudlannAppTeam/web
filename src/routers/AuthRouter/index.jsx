import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from '../../views/Home';
import Login from '../../views/Login';
import Register from '../../views/Register';
import AuthLayout from '../../components/AuthLayout';

const AuthRouter = () => {
    return (
        <Router>
            <AuthLayout>
                <Switch>
                    <Route exact path="/" name="Hello page" component={Home} />
                    <Route exact path="/login" name="Sign In Page" component={Login}/>
                    <Route exact path="/register" name="Sign Up Page" component={Register}/>
                </Switch>
            </AuthLayout>
        </Router>
    );
};

export default AuthRouter;