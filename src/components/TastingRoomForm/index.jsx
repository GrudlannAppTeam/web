import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../../components/inputs/Text';
import Button from '../../components/buttons/Button';

import styles from './index.module.scss';

const TastingRoomForm = ({ title, label, name, button, handleSubmit, onSubmit, register, clearErrors, errors, isLoading, maxLength }) => {
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <small className={styles.title}>{title}</small>
            <TextInput
                label={label}
                name={name}
                register={register({ required: true })}
                outline
                onFocus={() => clearErrors('form')}
                maxLength={maxLength ? maxLength : null}
            />
            <Button outline color='light' text={button} className='mt-5' isLoading={isLoading}/>
            {errors.form && <small className={styles.error}>{errors.form.message}</small>}
        </form>
    );
};

TastingRoomForm.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    button: PropTypes.string,
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
    clearErrors: PropTypes.func,
    errors: PropTypes.object,
    isLoading: PropTypes.bool,
    register: PropTypes.func,
};

export default TastingRoomForm;