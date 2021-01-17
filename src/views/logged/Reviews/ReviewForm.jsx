import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './ReviewForm.module.scss';
import ReviewQuestion from './ReviewQuestion';
import TextLink from '../../../components/buttons/TextLink/index';

class ReviewForm extends React.Component {

    state = {
        questions: [],
    };

     componentDidMount() {
        axios.get('https://grudlann-app.herokuapp.com/api/questions/answers', { headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')).value}`, 'Accept': '*/*' }})
        .then((response) => {
            console.log(response);
            this.setState({
                questions: response.data,
            });
        }).catch(err => console.log(err.message));
    }
  render() {
     const { questions } = this.state;
    return (
        <div className={styles.wrapper}>  
            <div>
                <TextLink target='/tasting' className={styles.start} withIcon text='Wróć' />
                {questions.map(question => (
                    <ReviewQuestion
                        key={question.name}
                        name={question.name}
                        answers={question.answers}
                    />
                ))}    
            </div>
        </div>
    );
  };
};

export default ReviewForm;