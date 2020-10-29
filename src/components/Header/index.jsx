import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

const propTypes = {
    props: PropTypes.object,
};

const Header = ({ text }) => {
    return <h2 className={styles.header}>{text}</h2>;
};

Header.propTypes = propTypes;

export default Header;