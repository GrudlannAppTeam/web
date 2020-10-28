import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';
import { Link } from 'react-router-dom';

const propTypes = {
    props: PropTypes.object,
};

const StandardButton = ({ text, target }) => {
    return <Link className={styles.button} to={target}>{text}</Link>;
};

StandardButton.propTypes = propTypes;

export default StandardButton;