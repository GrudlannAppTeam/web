import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReviewQuestion.module.scss';
import Button from '../../../components/buttons/Button';

const propTypes = {
    props: PropTypes.object,
};

const ReviewQuestion = (props) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.question}>{props.name}</h2>
            {props.answers.map(answer => (
               <Button text={answer.name} value={answer.lp} onClick={props.handleClick}/>
            ))}
        </div>
    );
};

ReviewQuestion.propTypes = propTypes;

export default ReviewQuestion;