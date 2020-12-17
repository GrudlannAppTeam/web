import axios from 'axios';

import { setUser } from '../../features/auth/slice';
import { setActiveTasting } from '../../features/tasting/slice';
import { setLocalStorage } from '../../utils';

const apiUrl = process.env.REACT_APP_API_URL;

export const login = data => async dispatch => {
    try {
        const response = await axios.post(`${apiUrl}api/users/login`, data);

        setLocalStorage('token', response.data.token);
        setLocalStorage('nick', response.data.nick);
        setLocalStorage('email', data.email);
        if(response.data.tastingRoom) {
            setLocalStorage('tastingRoomId', response.data.tastingRoom.id);
            dispatch(setUser({ email: data.email, nick: response.data.nick, tastingRoomId: response.data.tastingRoom.id }));
        } else {
            dispatch(setUser({ email: data.email, nick: response.data.nick, tastingRoomId: response.data.tastingRoom.id }));
        }

        dispatch(setActiveTasting(response.data.tastingRoom));
    } catch (error) {
        return 'Niepoprawne dane';
    }
};

export const register = data => async dispatch => {
    try {
        const response = await axios.post(`${apiUrl}api/users/register`, data);

        if(response.status === 201) {
            return true;
        } else {
            return 'Rejestracja nieudana';
        }
    } catch (error) {
        return 'Niepoprawne dane';
    }
};

export const logout = () => dispatch => {
    localStorage.removeItem('token');
    localStorage.removeItem('nick');
    localStorage.removeItem('email');
    localStorage.removeItem('tastingRoomId');
    dispatch(setUser(null));
};