import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTastingRoomById } from '../../../redux/methods/tasting';

import { Spinner } from 'reactstrap';
import ActiveTastingRoom from '../../../components/ActiveTastingRoom';
import NewTastingRoom from '../../../components/NewTastingRoom';

import styles from './index.module.scss';

const Tasting = ({ getTastingRoomById, isLoading, activeTasting }) => {
    useEffect(() => {
        if(activeTasting && typeof activeTasting === 'number'){
            getTastingRoomById(activeTasting);
        }
    }, [activeTasting, getTastingRoomById]);

    return typeof activeTasting !== 'number' ? (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {activeTasting
                    ? <ActiveTastingRoom />
                    : <NewTastingRoom />
                }
            </div>
        </div>
    ) : <div className={styles.loaderWrapper}><Spinner animation="border" color="light" /></div>;
};

const mapStateToProps = state => ({
    isLoading: state.tasting.isLoading,
    activeTasting: state.tasting.activeTasting,
});

const mapDispatch = {
    getTastingRoomById,
};

export default connect(mapStateToProps, mapDispatch)(Tasting);