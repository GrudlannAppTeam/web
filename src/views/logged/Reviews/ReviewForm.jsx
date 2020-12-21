import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const propTypes = {
    props: PropTypes.object,
};

const ReviewForm = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
            </div>
        </div>
    );
};

ReviewForm.propTypes = propTypes;

export default ReviewForm;