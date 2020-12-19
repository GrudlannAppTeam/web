import React, { useEffect, useState } from 'react';
import './App.css';
import VideoBackground from './components/VideoBackground';
import { setUser } from './features/auth/slice';
import { getUserById } from './redux/methods/auth';
import RootRouter from './routers/RootRouter';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';
import styles from './index.module.scss';

const App = ({ user, getUserById }) =>  {
    const [loading, setLaoding] = useState(true);
    useEffect(() => {
        const asyncFunc = async () => {
            await getUserById();
            setLaoding(false);
        };

        if(!user) {asyncFunc();}
        else {
            setLaoding(false);
        }
    }, []);

    return (
        <>
            <VideoBackground />
            {!loading ? <RootRouter /> : <div className={styles.loaderWrapper}><Spinner animation='border' color='light' /></div>}
        </>
    );
};

const mapStateToProps = state => ({
    user: state.auth.user
});

const mapDispatch = {
    setUser,
    getUserById,
};

export default connect(mapStateToProps, mapDispatch)(App);
