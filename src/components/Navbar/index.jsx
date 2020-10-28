import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const propTypes = {
    props: PropTypes.object,
};

const Navbar = () => {
    return (
        <nav className={styles.container}>
            <Link to="/">
                <img src="logo.png" alt=""/>
                GrundlanApp
            </Link>
        </nav>
    );
};

Navbar.propTypes = propTypes;

export default Navbar;