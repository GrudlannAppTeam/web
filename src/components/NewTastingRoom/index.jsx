import React, { useState, useEffect } from 'react';

import JoinTastingRoomForm from '../../features/tasting/JoinTastingRoomForm';
import CreateTastingRoomForm from '../../features/tasting/CreateTastingRoomForm';
import TextLink from '../../components/buttons/TextLink';
import Button from '../buttons/Button';

import styles from './index.module.scss';

const NewTastingRoom = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [activeForm, setActiveForm] = useState('join');

    useEffect(() => {
        return () => {
            setIsLoading(false);
        };
    }, []);

    const setActiveFormByType = type => () => {
        setActiveForm(type);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <TextLink target='/' withIcon text='Strona główna' />
                <div className={styles.buttons}>
                    <Button color={activeForm === 'create' ? 'active' : 'light'} small outline onClick={setActiveFormByType('create')} text='Stwórz nową degustację' />
                    <Button color={activeForm === 'join' ? 'active' : 'light'} small outline onClick={setActiveFormByType('join')} text='Dołącz za pomocą kodu' />
                </div>
                {activeForm === 'join' && <JoinTastingRoomForm isLoading={isLoading} setIsLoading={setIsLoading} />}
                {activeForm === 'create' && <CreateTastingRoomForm isLoading={isLoading} setIsLoading={setIsLoading} />}
            </div>
        </div>
    );
};

export default NewTastingRoom;