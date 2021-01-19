import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './RoomStats.module.scss';
import TextLink from '../../../components/buttons/TextLink/index';
import Button from '../../../components/buttons/Button';

class RoomStats extends React.Component {

    state = {
        roomStats: [],
        
    };

     componentDidMount() {
        axios.get(`https://grudlann-app.herokuapp.com/api/reviews/statistics/${localStorage.getItem('StatsId')}`, { headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')).value}`, 'Accept': '*/*' }})
        .then((response) => {
            console.log(response);
            this.setState({
                roomStats: response.data,
            });
        }).catch(err => console.log(err.message));
    }
  render() {
     const { roomStats } = this.state;
    return (
        <div className={styles.wrapper}>  
            <div>
                <TextLink target='/statistics' className={styles.start} withIcon text='Wróć' />
                  <h2 className={styles.question}>Oceny</h2>  
                   {roomStats.map(stats => (
                       <div className={styles.wrapper2}>
                       <p className={styles.question}>Piwo: {stats.beer.name}</p>
                       <p className={styles.question}>Pytanie: {stats.answer.question.name}</p>
                       <p className={styles.question}>Odpowiedź: {stats.answer.name}, za {stats.answer.lp} pkt.</p> 
                       </div>
                ))}            
            </div>
        </div>
    );
  };
};

export default RoomStats;