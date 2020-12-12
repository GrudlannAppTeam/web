import React from 'react';
import TextLink from '../../components/buttons/TextLink';

import styles from './index.module.scss';

const ActiveTastingRoom = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <TextLink target='/' withIcon text='Strona główna' />
                <h3 style={{ color: 'white', marginTop: '20px' }}>Posiadasz aktywną salę!</h3>
                <code>Strona w budowie</code>
            </div>
        </div>
    );
};

export default ActiveTastingRoom;