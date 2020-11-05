import React from 'react';
import PropTypes from 'prop-types';
import { motion } from "framer-motion";

import Link from '../../components/buttons/Link';

import styles from './index.module.scss';

const propTypes = {
    props: PropTypes.object,
};

const HomePage = () => {
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
            <Link text='logowanie' target='/login'/>
            <Link text='rejestracja' target='/register'/>
        </div>
    );
};

HomePage.propTypes = propTypes;

export default HomePage;