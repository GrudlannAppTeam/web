import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/buttons/Standard';

import styles from './index.module.scss';

const propTypes = {
    props: PropTypes.object,
};

const HomePage = () => {
    return (
        <div className={styles.container}>
            <img src='logo.png' alt=''/>
            <h2>Grundlan App - Drink With Us!</h2>
            <Button text='logowanie' target='/login'/>
            <Button text='rejestracja' target='/register'/>
        </div>
    );
};

HomePage.propTypes = propTypes;

export default HomePage;