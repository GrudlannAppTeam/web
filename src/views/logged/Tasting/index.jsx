import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTastingRoomById } from '../../../redux/methods/tasting';

import { Spinner } from 'reactstrap';
import ActiveTastingRoom from '../../../components/ActiveTastingRoom';
import NewTastingRoom from '../../../components/NewTastingRoom';

import styles from './index.module.scss';

const Tasting = ({ getTastingRoomById, isLoading, isInitialize, activeTasting, tastingRoomId }) => {
    useEffect(() => {
        if(!isInitialize && !activeTasting && tastingRoomId){
            getTastingRoomById(tastingRoomId);
        }
    }, [getTastingRoomById, isInitialize]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                { isLoading
                    ? <div className={styles.loaderWrapper}><Spinner animation="border" color="light" /></div>
                    : activeTasting
                        ? <ActiveTastingRoom />
                        : <NewTastingRoom />
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isLoading: state.tasting.isLoading,
    isInitialize: state.tasting.isInitialize,
    activeTasting: state.tasting.activeTasting,
    tastingRoomId: state.auth.user.tastingRoomId,
});

const mapDispatch = {
    getTastingRoomById,
};

export default connect(mapStateToProps, mapDispatch)(Tasting);