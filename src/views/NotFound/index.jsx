import React from 'react';

import TextLink from '../../components/buttons/TextLink';

import styles from './index.module.scss';

const NotFound = () => {
    return (
        <div className={styles.wrapper}>
            <h3>Ups! Nie znaleziono strony!</h3>
            <TextLink text='Powrót do strony głównej' withIcon target='/'/>
        </div>
    );
};

export default NotFound;