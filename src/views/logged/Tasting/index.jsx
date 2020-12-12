import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTastingRoom } from '../../../redux/methods/tasting';

import { Spinner } from 'reactstrap';
import ActiveTastingRoom from '../../../components/ActiveTastingRoom';
import NewTastingRoom from '../../../components/NewTastingRoom';

import styles from './index.module.scss';

const Tasting = ({ getTastingRoom, isLoading, isInitialize, activeTasting }) => {
    useEffect(() => {
        if(!isInitialize){
            getTastingRoom();
        }
    }, [getTastingRoom, isInitialize]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                { isLoading
                    ? <div className={styles.loaderWrapper}><Spinner animation="border" color="light" /></div>
                    : activeTasting && activeTasting.length > 0
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
});

const mapDispatch = {
    getTastingRoom,
};

export default connect(mapStateToProps, mapDispatch)(Tasting);