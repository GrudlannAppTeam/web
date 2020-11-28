import React, { useEffect } from 'react';
import './App.css';
import VideoBackground from './components/VideoBackground';
import { setUser } from './features/auth/slice';
import RootRouter from './routers/RootRouter';
import { getFromLocalStorage } from './utils';
import { connect } from 'react-redux';

const App = ({ setUser, user }) =>  {
    useEffect(() => {
        if(!user) {
            const token = getFromLocalStorage('token');
            const email = getFromLocalStorage('email');
            const nick = getFromLocalStorage('nick');

            if(token && email && nick) {
                setUser({ email, nick });
            };
        }
    }, []); //eslint-disable-line

    return (
        <>
            <VideoBackground />
            <RootRouter />
        </>
    );
};

const mapStateToProps = state => ({
    user: state.auth.user
});

const mapDispatch = {
    setUser,
};

export default connect(mapStateToProps, mapDispatch)(App);
