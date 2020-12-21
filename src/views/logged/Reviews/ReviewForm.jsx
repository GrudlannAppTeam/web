import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

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
    state = {
        questions: [],
    }
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
            </div>
        </div>
    );
  };
};

ReviewForm.propTypes = propTypes;

export default ReviewForm;