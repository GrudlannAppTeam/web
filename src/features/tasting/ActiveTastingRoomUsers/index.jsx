import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';

import styles from './index.module.scss';

const ActiveTastingRoomUsers = ({ activeTasting }) => {
    return (
        <>
            <div className={clsx('mb-5 text-center', styles.wrapper)}>
                {
                    activeTasting.users.map(user =>
                        <p key={`${user.id}`} className={styles.row}>
                            <span className={styles.name}>{user.nick} {user.id === activeTasting.owner.id && <small>Właściciel</small>}</span>
                        </p>
                    )
                }
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    activeTasting: state.tasting.activeTasting,
});

const mapDispatch = {

};

export default connect(mapStateToProps, mapDispatch)(ActiveTastingRoomUsers);