import axios from 'axios';
import { getConfig } from '../../utils';
import { setActiveTasting, setIsLoading, setIsInitialize, addBeerToState, setActiveTastingRoomStatus, setActiveTastingRoomCode } from '../../features/tasting/slice';

const apiUrl = process.env.REACT_APP_API_URL;

export const createTastingRoom = body => async dispatch => {
    try {
        const config = await getConfig();
        const response = await axios.post(`${apiUrl}api/tasting-rooms`, body, config);
        const tastingRoom = await axios.get(`${apiUrl}api/tasting-rooms/${response.data.id}`, config);

        dispatch(setActiveTasting(tastingRoom.data));
    } catch (error) {
        return 'Cos poszło nie tak';
    }
};

export const joinToTastingRoom = body => async dispatch => {
    try {
        const config = await getConfig();
        const response = await axios.post(`${apiUrl}api/tasting-rooms/join`, body, config);

        dispatch(setActiveTasting(response.data.id));
    } catch (error) {
        return 'Użyłeś niepoprawnego kodu';
    }
};

export const getTastingRoomById = id => async dispatch => {
    dispatch(setIsLoading(true));

    try {
        const config = await getConfig();

        const response = await axios.get(`${apiUrl}api/tasting-rooms/${id}`, config);

        dispatch(setActiveTasting(response.data));
        dispatch(setIsInitialize(true));
        dispatch(setIsLoading(false));
    } catch (error) {
        dispatch(setIsLoading(false));
        return 'Cos poszło nie tak';
    }
};

export const addBeer = formData => async dispatch => {
    dispatch(setIsLoading(true));

    try {
        const config = await getConfig();

        const response = await axios.post(`${apiUrl}api/beers/tasting-rooms`, formData, config);

        const newBeer = {
            id: response.data.beers[response.data.beers.length - 1].id,
            name: formData.beerName,
        };

        dispatch(addBeerToState(newBeer));
        dispatch(setIsLoading(false));
        return;
    } catch (error) {
        dispatch(setIsLoading(false));
        return 'Cos poszło nie tak';
    }
};

export const removeTasting = id => async dispatch => {
    dispatch(setIsLoading(true));

    try {
        const config = await getConfig();

        await axios.delete(`${apiUrl}api/tasting-rooms/${id}`, config);

        dispatch(setActiveTasting(null));
        dispatch(setIsLoading(false));
    } catch (error) {
        dispatch(setIsLoading(false));
        return 'Cos poszło nie tak';
    }
};

export const startTasting = id => async dispatch => {
    dispatch(setIsLoading(true));

    try {
        const config = await getConfig();

        const res = await axios.put(`${apiUrl}api/tasting-rooms`, { tastingRoomId: id, status: true }, config);
        console.log(res);
        dispatch(setActiveTastingRoomStatus(true));
        dispatch(setActiveTastingRoomCode(res.data.code));
        dispatch(setIsLoading(false));
    } catch (error) {
        dispatch(setIsLoading(false));
        return 'Cos poszło nie tak';
    }
};

export const closeTasting = id => async dispatch => {
    dispatch(setIsLoading(true));

    try {
        const config = await getConfig();

        await axios.put(`${apiUrl}api/tasting-rooms`, { tastingRoomId: id, status: false }, config);

        dispatch(setActiveTasting(null));
        dispatch(setIsLoading(false));
    } catch (error) {
        dispatch(setIsLoading(false));
        return 'Cos poszło nie tak';
    }
};