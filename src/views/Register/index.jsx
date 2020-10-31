import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import TextInput from '../../components/inputs/Text';
import Button from '../../components/buttons/Button';

import styles from './index.module.scss';

const propTypes = {
    props: PropTypes.object,
};

const RegisterPage = () => {
    const { register, handleSubmit, errors, watch } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className={styles.wrapper}>
            <video autoPlay loop muted poster='home.png' >
                <source src="video.mp4" type="video/mp4" />
            </video>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <small className={styles.start}><Link to='/'><FontAwesomeIcon icon={faAngleLeft} size='lg'/> Strona startowa</Link></small>
                <small className={styles.title}>Rejestracja</small>
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
                    <Button outline color='light' text='zarejestruj' className='mt-5'/>
                    <small className={styles.underButton}>Posiadasz juz konto? <Link to='/login'>Zaloguj się!</Link></small>
                </form>
            </div>
        </div>
    );
};

RegisterPage.propTypes = propTypes;

export default RegisterPage;