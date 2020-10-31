import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Home from '../../views/Home';
import Login from '../../views/Login';
import Register from '../../views/Register';
import AuthLayout from '../../components/AuthLayout';

const AuthRouter = () => {
    return (
        <Switch>
            <AuthLayout>
                <Route exact path="/" name="Hello page" component={Home} />
                <Route exact path="/login" name="Sign In Page" component={Login}/>
                <Route exact path="/register" name="Sign Up Page" component={Register}/>
            </AuthLayout>
        </Switch>
    );
};

export default AuthRouter;