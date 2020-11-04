import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './index.module.scss';

const propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    outline: PropTypes.bool,
    color: PropTypes.oneOf(['light']),
};

const Link = ({ text, onClick, className, outline, color }) => {
    return (
        <button
            className={clsx(
                styles.button,
                className,
                outline && styles.outline,
                styles[color]
            )}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

Link.propTypes = propTypes;

export default Link;