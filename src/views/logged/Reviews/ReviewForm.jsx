import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './ReviewForm.module.scss';
import ReviewQuestion from './ReviewQuestion';

const propTypes = {
    props: PropTypes.object,
};
const token = JSON.parse(localStorage.getItem('token'));

axios.interceptors.request.use(
    config => {
        config.headers.authorization = `Bearer ${token.value}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

class ReviewForm extends React.Component {
    constructor () {
        super();
        this.handleClick = this.handleClick.bind(this);
      }
    state = {
        questions: [],
        answerId: 0,
        beerId: 0,
        hideQuestions: [],
    }
    handleClick = (e) => {
         this.setState({
             answerId: e.target.value,
             beerId: localStorage.getItem('beerId')
         });
         axios
      .post('https://grudlann-app.herokuapp.com/api/reviews', { beerId: this.state.beerId,
      answerId: this.state.answerId})
      .then(res => console.log(res))
      .catch(err => console.log(err));
    };
     componentDidMount() {
        axios.get('https://grudlann-app.herokuapp.com/api/questions/answers',)
        .then((response) => {
            console.log(response);
            this.setState({
                questions: response.data,
            });
        }).catch(err => console.log(err.message));
    }
  render() { return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {this.state.questions.map(question => (
                    <ReviewQuestion
                        handleClick={this.handleClick}
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

ReviewForm.propTypes = propTypes;

export default ReviewForm;