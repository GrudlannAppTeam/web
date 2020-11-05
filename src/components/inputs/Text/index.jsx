import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './index.module.scss';

const propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.string,
    outline: PropTypes.bool,
    register: PropTypes.object,
};

const TextInput = ({ name, label, defaultValue, type, error, outline, register }) => {
    return (
        <div className={styles.container}>
            <input
                type={type}
                name={name}
                defaultValue={defaultValue}
                ref={register}
                className={
                    clsx(
                        styles.input,
                        error && styles.error,
                        outline && styles.outline,
                    )
                }
            />
            <small className={styles.label}>{label}</small>
            {error && <small className={styles.error}>{error?.type === 'required' ? 'Pole wymagane' : error.message}</small>}
        </div>
    );
};

TextInput.propTypes = propTypes;

export default TextInput;