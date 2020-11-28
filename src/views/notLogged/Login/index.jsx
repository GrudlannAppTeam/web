import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../../redux/methods/auth';

import TextInput from '../../../components/inputs/Text';
import Button from '../../../components/buttons/Button';
import TextLink from '../../../components/buttons/TextLink';

import styles from './index.module.scss';

const propTypes = {
    user: PropTypes.object,
    login: PropTypes.func,
};

const LoginPage = ({ login }) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        return () => {
            setIsLoading(false);
        };
    }, []);

    const { register, handleSubmit, errors, setError, clearErrors } = useForm();

    const onSubmit = async data => {
        clearErrors();
        setIsLoading(true);
        const error = await login(data);
        setIsLoading(false);
        if(error) {
            setError('form', { message: error });
        }
    };

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
                        onFocus={() => clearErrors('form')}
                    />
                    <TextInput
                        label='Hasło'
                        name='password'
                        type='password'
                        register={register({ required: true })}
                        error={errors.password}
                        outline
                        onFocus={() => clearErrors('form')}
                    />
                    <Button outline color='light' text='zaloguj' className='mt-5' isLoading={isLoading} />
                    {errors.form && <small className={styles.error}>{errors.form.message}</small>}
                    <small className={styles.underButton}>Nie masz konta? <Link to='/register'>Zarejestruj się!</Link></small>
                </form>
            </div>
        </div>
    );
};

LoginPage.propTypes = propTypes;

const mapStateToProps = state => ({
    user: state.auth.user,
});

const mapDispatch = {
    login,
};

export default connect(mapStateToProps, mapDispatch)(LoginPage);