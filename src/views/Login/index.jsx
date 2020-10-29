import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import TextInput from '../../components/inputs/Text';
import Button from '../../components/buttons/Button';

import styles from './index.module.scss';

const propTypes = {
    props: PropTypes.object,
};

const LoginPage = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <small className={styles.title}>Logowanie</small>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <TextInput
                        label='Login'
                        name='login'
                        register={register}
                        error={errors.login}
                        placeholder='Login'
                    />
                    <TextInput
                        label='password'
                        name='password'
                        type='password'
                        register={register}
                        error={errors.password}
                        validateObject={{ required: true }}
                    />
                    <Button outline text='zaloguj' className='mt-5'/>
                </form>
            </div>
        </div>
    );
};

LoginPage.propTypes = propTypes;

export default LoginPage;