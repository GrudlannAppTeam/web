import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './index.module.scss';

const propTypes = {
    props: PropTypes.object,
};

const Link = ({ text, target, className, outline }) => {
    return <button className={clsx(styles.button, className, outline && styles.outline)} to={target}>{text}</button>;
};

Link.propTypes = propTypes;

export default Link;