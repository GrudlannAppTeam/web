import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AuthRouter from '../AuthRouter';
import MainRouter from '../MainRouter';

const propTypes = {

};

const RootRouter = ({ user }) => {
    return (
        <Router>
            {
                user ? (
                    <MainRouter />
                ) : (
                    <AuthRouter />
                )
            }
        </Router>
    );
};

RootRouter.propTypes = propTypes;

const mapStateToProps = state => ({
    user: state.auth.user,
});

export default connect(mapStateToProps)(RootRouter);