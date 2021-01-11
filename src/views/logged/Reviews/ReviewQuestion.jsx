import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReviewQuestion.module.scss';
import Button from '../../../components/buttons/Button';

const propTypes = {
    props: PropTypes.object,
};

class ReviewQuestion extends React.Component {
constructor(props){
    super(props);

    this.state={
        answerId: 0,
        beerId: 0,
        hide: true,
    };
}
 handleClick = (e) => {
         this.setState({
             answerId: e.target.value,
             beerId: localStorage.getItem('beerId'),
             hide: false,
         });
          console.log(this.state.answerId);
          console.log(this.state.beerId);

        };
    
    render(){

    return ( 
       this.state.hide ? (<div className={styles.wrapper}>
            <h2 className={styles.question}>{this.props.name}</h2>
            {this.props.answers.map(answer => (
               <Button text={answer.name} value={answer.lp} onClick={this.handleClick}/>
            ))}
        </div>): null
    );
};
}

ReviewQuestion.propTypes = propTypes;

export default ReviewQuestion;