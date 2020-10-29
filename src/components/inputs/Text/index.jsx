import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './index.module.scss';

const propTypes = {
    props: PropTypes.object,
};

const TextInput = ({ name, label, register, defaultValue, type, error, validateObject }) => {
    return (
        <div className={styles.container}>
            <input
                type={type}
                name={name}
                defaultValue={defaultValue}
                ref={register(validateObject)}
                className={clsx(styles.input, error && styles.error)}
            />
            <small className={styles.label}>{label}</small>
            {error && <small className={styles.error}>{error?.type === 'required' && 'Pole wymagane'}</small>}
        </div>
    );
};

TextInput.propTypes = propTypes;

export default TextInput;