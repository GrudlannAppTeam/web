import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReviewQuestion.module.scss';

const propTypes = {
    props: PropTypes.object,
};

const ReviewQuestion = (props) => {
    return (
        <div className={styles.wrapper}>
            <h2>{props.name}</h2>
            {props.answers.map(answer => (
                <p>{answer.name}</p>
            ))}
        </div>
    );
};

ReviewQuestion.propTypes = propTypes;

export default ReviewQuestion;