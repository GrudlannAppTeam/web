import React, { useEffect, useState } from 'react';
import ActiveTastingRoomTastings from '../../features/tasting/ActiveTastingRoomTastings';
import ActiveTastingRoomUsers from '../../features/tasting/ActiveTastingRoomUsers';
import Button from '../buttons/Button';
import TextLink from '../buttons/TextLink';

import styles from './index.module.scss';

const ActiveTastingRoom = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('beers');

    useEffect(() => {
        return () => {
            setIsLoading(false);
        };
    }, []);

    const setActiveFormByType = type => () => {
        setActiveTab(type);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <TextLink target='/' className={styles.start} withIcon text='Strona główna' />
                <div className={styles.buttons}>
                    <Button color={activeTab === 'beers' ? 'active' : 'light'} small outline onClick={setActiveFormByType('beers')} text='Lista piw do oceny' />
                    <Button color={activeTab === 'users' ? 'active' : 'light'} small outline onClick={setActiveFormByType('users')} text='Lista użytkowników' />
                </div>
                {activeTab === 'beers' && <ActiveTastingRoomTastings />}
                {activeTab === 'users' && <ActiveTastingRoomUsers />}
            </div>
        </div>
    );
};

export default ActiveTastingRoom;