import React from 'react';

import TextLink from '../../components/buttons/TextLink';

import VideoBackground from '../../components/VideoBackground';

import styles from './index.module.scss';

const NotFound = () => {
    return (
        <div className={styles.wrapper}>
            <VideoBackground />
            <h3>Ups! Nie znaleziono strony!</h3>
            <TextLink text='Powrót do strony głównej' withIcon target='/'/>
        </div>
    );
};

export default NotFound;