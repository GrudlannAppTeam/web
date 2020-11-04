import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import TextLink from '../../components/buttons/TextLink';

import VideoBackground from '../../components/VideoBackground';

import styles from './index.module.scss';

const propTypes = {
    props: PropTypes.object,
};

const NotFound = () => {
    return (
        <div className={styles.wrapper}>
            <VideoBackground />
            <h3>Ups! Nie znaleziono strony!</h3>
            <TextLink text='Powrót do strony głównej' withIcon target='/'/>
        </div>
    );
};

NotFound.propTypes = propTypes;

export default NotFound;