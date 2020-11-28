import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import TextInput from '../../../components/inputs/Text';
import Button from '../../../components/buttons/Button';
import TextLink from '../../../components/buttons/TextLink';

import styles from './index.module.scss';

const propTypes = {
    props: PropTypes.object,
};

const ForgotPassword = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <TextLink target='/' className={styles.start} withIcon text='Strona startowa' />
                    <small className={styles.title}>Przypomnij hasło</small>
                    <TextInput
                        label='Email'
                        name='email'
                        register={register({ required: true })}
                        error={errors.email}
                        outline
                    />
                    <Button outline color='light' text='wyślij' className='mt-5'/>
                </form>
            </div>
        </div>
    );
};

ForgotPassword.propTypes = propTypes;

export default ForgotPassword;