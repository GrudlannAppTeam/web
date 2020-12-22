import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReviewQuestion.module.scss';

const propTypes = {
    props: PropTypes.object,
};

const ReviewQuestion = (props) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.question}>{props.name}</h2>
            {props.answers.map(answer => (
                <label className={styles.question}>
                    {answer.name}
                    <input type="radio"/>
                </label>
            ))}
        </div>
    );
};

ReviewQuestion.propTypes = propTypes;

export default ReviewQuestion;