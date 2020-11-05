import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import TextInput from '../../components/inputs/Text';
import Button from '../../components/buttons/Button';
import TextLink from '../../components/buttons/TextLink';

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
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <TextLink target='/' className={styles.start} withIcon text='Strona startowa' />
                    <small className={styles.title}>Logowanie</small>
                    <TextInput
                        label='Email'
                        name='email'
                        register={register({ required: true })}
                        error={errors.email}
                        outline
                    />
                    <TextInput
                        label='Hasło'
                        name='password'
                        type='password'
                        register={register({ required: true })}
                        error={errors.password}
                        outline
                    />
                    <Button outline color='light' text='zaloguj' className='mt-5'/>
                    <small className={styles.underButton}>Nie masz konta? <Link to='/register'>Zarejestruj się!</Link></small>
                </form>
            </div>
        </div>
    );
};

LoginPage.propTypes = propTypes;

export default LoginPage;