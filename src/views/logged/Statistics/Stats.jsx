import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';
import TextLink from '../../../components/buttons/TextLink/index';
import Button from '../../../components/buttons/Button';

class Statistics extends React.Component {

    state = {
        stats: [],
        tastingRooms: [],
    };

     handleClick = id => () => {
        console.log(id);
       this.props.history.push(`/stats/${id}`);
        localStorage.setItem('StatsId', id);
    };

     componentDidMount() {
        axios.get('https://grudlann-app.herokuapp.com/api/reviews/statistics', { headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')).value}`, 'Accept': '*/*' }})
        .then((response) => {
            console.log(response);
            this.setState({
                stats: response.data,
            });
        }).catch(err => console.log(err.message));
        
    }
  render() {
     const { stats, tastingRooms } = this.state;
    return (
        <div className={styles.wrapper}>  
            <div>
                <TextLink target='/' className={styles.start} withIcon text='Strona główna' />
                <h2 className={styles.question}>Sprawdź swoje odpowiedzi</h2>
                 {stats.forEach(function(item){
                     const i = tastingRooms.findIndex(x => x.name === item.tastingRoom.name);
                     if(i <= -1){
                         tastingRooms.push({id: item.tastingRoom.id, name: item.tastingRoom.name});
                     }
                     console.log(tastingRooms); 
                 })  
                 }
                  {tastingRooms.map(tastingRoom => (
                    <Button key={tastingRoom.id} className={styles.questionbutton} outline color='light' text={tastingRoom.name} onClick={this.handleClick(tastingRoom.id)}/>
                ))} 
                 <h2 className={styles.question}>Ogólne Statystyki</h2>
                 <p className={styles.question}>Liczba udziału w degustacjach: {tastingRooms.length}</p>
                 <p className={styles.question}>Liczba oddanych odpowiedzi: {stats.length}</p> 
            </div>
        </div>
    );
  };
};

export default Statistics;