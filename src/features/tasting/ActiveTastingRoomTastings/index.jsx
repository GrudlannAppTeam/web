import clsx from 'clsx';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBeer, startTasting, removeTasting, closeTasting } from '../../../redux/methods/tasting';
import { useForm } from 'react-hook-form';

import { Modal, ModalHeader, ModalBody, Form } from 'reactstrap';

import Button from '../../../components/buttons/Button';
import TextInput from '../../../components/inputs/Text';

import styles from './index.module.scss';

const ActiveTastingRoomTastings = ({ activeTasting, addBeer, startTasting, removeTasting, closeTasting }) => {
    const { register, handleSubmit } = useForm();
    const [ reatedBeersIds, setRatedBeersIds ] = useState([]);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const handleClick = id => () => {
        console.log(id);
    };

    const handleClose = () => {
        closeTasting(activeTasting.id);
    };

    const handleRemove = () => {
        removeTasting(activeTasting.id);
    };

    const handleAddBeer = formData => {
        addBeer({ ...formData, tastingRoomId: activeTasting.id });
    };

    const handleStart = () => {
        startTasting(activeTasting.id);
    };

    const closeBtn = <button className={styles.close} onClick={toggle}>&times;</button>;

    return (
        <>
            {
                activeTasting.code && <code className={styles.code}>Kod do dołączenia <span>{activeTasting.code}</span> </code>
            }
            {
                activeTasting.isStart &&
                    <>
                        <code className={styles.subtitle}>Kliknij piwo aby wystawić recenzję!</code>
                        <p className={styles.subtitle}>Oceniłeś <b>{reatedBeersIds.length}</b> z <b>{activeTasting.beers.length}</b> piw!</p>
                    </>
            }
            <div className={clsx('mb-5 text-center', styles.wrapper)}>
                {
                    activeTasting.beers.map(beer =>
                        <button
                            key={`${beer.id}`}
                            disabled={!activeTasting.isStart || reatedBeersIds.includes(beer.id)}
                            className={clsx(styles.row, !activeTasting.isStart && styles.notStarted, reatedBeersIds.includes(beer.id) && styles.rated)}
                            onClick={handleClick(beer.id)
                        }>
                            <p className={styles.name}>{beer.name}</p>
                            {activeTasting.isStart && <code className={styles.subtitle}>{reatedBeersIds.includes(beer.id) ? 'Piwo ocenione' : 'Dodaj ocene'}</code>}
                        </button>
                    )
                }
            </div>
            {
                activeTasting.isStart &&
                    <Button small outline color='light' onClick={handleClose} text='Zamknij degustacje' className='mb-2 w-100' isLoading={false}/>
            }
            {
                !activeTasting.isStart &&
                    <>
                        <Button onClick={toggle} small outline color='light' text='Dodaj piwo' className='mb-2 w-100' isLoading={false}/>
                        <div className='d-flex'>
                            <Button small outline onClick={handleStart} color='light' text='Wystartuj degustacje' className='mr-2 w-50' isLoading={false}/>
                            <Button small outline onClick={handleRemove} color='light' text='Usuń degustacje' className='w-50' isLoading={false}/>
                        </div>
                    </>
            }
            <Modal isOpen={modal} toggle={toggle} className={styles.modal}>
                <Form onSubmit={handleSubmit(handleAddBeer)}>
                    <ModalHeader close={closeBtn} toggle={toggle}>Dodawanie piwa</ModalHeader>
                    <ModalBody>
                        <TextInput
                            label='Nazwa piwa'
                            name='beerName'
                            register={register({ required: true })}
                            outline
                        />
                    </ModalBody>
                    <div className='d-flex justify-content-end'>
                        <Button type='submit' small outline color='light' text='Dodaj' className='mr-2 w-25' isLoading={false}/>
                        <Button type='button' small outline onClick={toggle} color='light' text='Anuluj' className='w-25' isLoading={false}/>
                    </div>
                </Form>
            </Modal>
        </>
    );
};

const mapStateToProps = state => ({
    activeTasting: state.tasting.activeTasting,
});

const mapDispatch = {
    addBeer,
    startTasting,
    removeTasting,
    closeTasting,
};

export default connect(mapStateToProps, mapDispatch)(ActiveTastingRoomTastings);