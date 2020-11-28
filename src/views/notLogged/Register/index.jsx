import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register as registerUser } from '../../../redux/methods/auth';

import TextInput from '../../../components/inputs/Text';
import Button from '../../../components/buttons/Button';
import TextLink from '../../../components/buttons/TextLink';

import styles from './index.module.scss';

const propTypes = {
    props: PropTypes.object,
};

const RegisterPage = ({ registerUser }) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ success, setSuccess ] = useState(false);

    useEffect(() => {
        return () => {
            setIsLoading(false);
        };
    }, []);

    const { register, handleSubmit, errors, setError, clearErrors, watch } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
    });

    const onSubmit = async data => {
        clearErrors();
        setIsLoading(true);
        const response = await registerUser(data);
        setIsLoading(false);

        if(response === true) {
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        } else if(response) {
            setError('form', { message: response });
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <TextLink target='/' withIcon text='Strona startowa' className={styles.start} />
                <small className={styles.title}>Rejestracja</small>
                    <TextInput
                        type='text'
                        label='Nick'
                        name='nick'
                        register={register({ required: true })}
                        error={errors.nick}
                        outline
                    />
                    <TextInput
                        type='email'
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
                    <TextInput
                        label='Powtórz hasło'
                        name='repPassword'
                        type='password'
                        error={errors.repPassword}
                        register={register({ validate: (value) => value === watch('password') || "Podane hasła nie są identyczne" })}
                        outline
                    />
                    <Button outline color='light' text='zarejestruj' className='mt-5' isLoading={isLoading}/>
                    {success && <small className={styles.success}>Rejestracja udana. Oczekuj maila z potwierdzeniem.</small>}
                    {errors.form && <small className={styles.error}>{errors.form.message}</small>}
                    <small className={styles.underButton}>Posiadasz juz konto? <Link to='/login'>Zaloguj się!</Link></small>
                </form>
            </div>
        </div>
    );
};

RegisterPage.propTypes = propTypes;

const mapDispatch = {
    registerUser,
};

export default connect(null, mapDispatch)(RegisterPage);