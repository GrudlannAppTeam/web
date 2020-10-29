import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link as ReactRouterLink } from 'react-router-dom';

import styles from './index.module.scss';

const propTypes = {
    props: PropTypes.object,
};

const Link = ({ text, target, className }) => {
    return <ReactRouterLink className={clsx(styles.link, className)} to={target}>{text}</ReactRouterLink>;
};

Link.propTypes = propTypes;

export default Link;