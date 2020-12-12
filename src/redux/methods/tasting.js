import axios from 'axios';
import { getConfig } from '../../utils';
import { setActiveTasting, setIsLoading, setIsInitialize } from '../../features/tasting/slice';

const apiUrl = process.env.REACT_APP_API_URL;

export const createTastingRoom = body => async dispatch => {
    try {
        const config = await getConfig();
        const response = await axios.post(`${apiUrl}api/tasting-rooms`, body, config);

        dispatch(setActiveTasting(response));
    } catch (error) {
        return 'Cos poszło nie tak';
    }
};

export const joinToTastingRoom = body => async dispatch => {
    try {
        const config = await getConfig();
        const response = await axios.post(`${apiUrl}api/tasting-rooms/join`, body, config);

        console.log(response);
    } catch (error) {
        return 'Użyłeś niepoprawnego kodu';
    }
};

export const getTastingRoom = () => async dispatch => {
    dispatch(setIsLoading(true));

    try {
        const config = await getConfig();

        const response = await axios.get(`${apiUrl}api/tasting-rooms`, config);

        dispatch(setActiveTasting(response.data));
        dispatch(setIsInitialize(true));
        dispatch(setIsLoading(false));
    } catch (error) {
        dispatch(setIsLoading(false));
        return 'Cos poszło nie tak';
    }
};