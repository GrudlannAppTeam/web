import axios from 'axios';

import { setUser } from '../../features/auth/slice';
import { setActiveTasting } from '../../features/tasting/slice';
import { setLocalStorage, getConfig, getFromLocalStorage } from '../../utils';

const apiUrl = process.env.REACT_APP_API_URL;

export const login = data => async dispatch => {
    try {
        const response = await axios.post(`${apiUrl}api/users/login`, data);

        setLocalStorage('token', response.data.token);
        setLocalStorage('id', response.data.userId);

        dispatch(setUser({ nick: response.data.nick }));

        dispatch(setActiveTasting(response.data.tastingRoom.id));
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

export const getUserById = () => async dispatch => {
    try {
        const config = await getConfig();
        const id = getFromLocalStorage('id');
        if(config  && id) {
            const response = await axios.get(`${apiUrl}api/users/${id}`, config);

            if(response.status === 403) {
                return;
            } else {
                dispatch(setUser({ nick: response.data.nick }));
                dispatch(setActiveTasting(response.data.id));
                return;
            }
        }
    } catch (error) {
        return 'Niepoprawne dane';
    }
};

export const logout = () => dispatch => {
    dispatch(setUser(null));
    dispatch(setActiveTasting(null));

    setLocalStorage('token', null);
    setLocalStorage('id', null);
};