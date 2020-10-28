import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from '../../views/Home';
import Login from '../../views/Login';
import Register from '../../views/Register';
import Layout from '../../components/Layout';

const AuthRouter = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" name="Hello page" component={Home} />
                    <Route exact path="/login" name="Sign In Page" component={Login}/>
                    <Route exact path="/register" name="Sign Up Page" component={Register}/>
                </Switch>
            </Layout>
        </Router>
    );
};

export default AuthRouter;