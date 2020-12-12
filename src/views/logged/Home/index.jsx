import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../../redux/methods/auth';
import { motion } from "framer-motion";

import Link from '../../../components/buttons/Link';
import Button from '../../../components/buttons/Button';

import styles from './index.module.scss';

const propTypes = {
    logout: PropTypes.func,
};

const HomePage = ({ logout }) => {
    return (
        <div className={styles.container}>
            <motion.div
                animate={{ rotate: [0, -80, 0] }}
                transition={{ ease: "easeOut", duration: 3 }}
                className={styles.wrapper}
            >
                <img src='logo.png' alt=''/>
            </motion.div>
            <h2>Grundlan App - Drink With Us!</h2>
            <Link text='Moja sala' target='/tasting'/>
            <Link text='Statystyki' target='/statistics'/>
            <Button text='Wyloguj' color='light' outline onClick={logout}/>
        </div>
    );
};

HomePage.propTypes = propTypes;

const mapDispatch = {
    logout,
};

export default connect(null, mapDispatch)(HomePage);