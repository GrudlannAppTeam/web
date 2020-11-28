import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Spinner } from 'reactstrap';

import styles from './index.module.scss';

const propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    outline: PropTypes.bool,
    color: PropTypes.oneOf(['light']),
};

const Button = ({ text, onClick, className, outline, color, isLoading = false }) => {
    return (
        <button
            className={clsx(
                styles.button,
                className,
                outline && styles.outline,
                styles[color],
                isLoading && styles.loading
            )}
            onClick={onClick}
            disabled={isLoading}
        >
            {isLoading ? <Spinner animation="border" /> : text}
        </button>
    );
};

Button.propTypes = propTypes;

export default Button;