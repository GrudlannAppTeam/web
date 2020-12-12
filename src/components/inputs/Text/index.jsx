import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './index.module.scss';

const propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.object,
    outline: PropTypes.bool,
    register: PropTypes.func,
    onFocus: PropTypes.func,
    maxLength: PropTypes.number,
};

const TextInput = ({ name, label, defaultValue, type, error, outline, register, onFocus, maxLength }) => {
    return (
        <div className={styles.container}>
            <input
                type={type}
                name={name}
                defaultValue={defaultValue}
                ref={register}
                maxLength={maxLength}
                className={
                    clsx(
                        styles.input,
                        error && styles.error,
                        outline && styles.outline,
                    )
                }
                onFocus={onFocus}
            />
            <small className={styles.label}>{label}</small>
            {error && <small className={styles.error}>{error?.type === 'required' ? 'Pole wymagane' : error.message}</small>}
        </div>
    );
};

TextInput.propTypes = propTypes;

export default TextInput;