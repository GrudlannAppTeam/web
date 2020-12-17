import { createSlice } from '@reduxjs/toolkit';

export const tastingSlice = createSlice({
    name: 'tasting',
        initialState: {
        isLoading: false,
        isInitialize: false,
        activeTasting: null,
    },
    reducers: {
        setActiveTasting(state, action){
            state.activeTasting = action.payload;
        },
        setIsLoading(state, action){
            state.isLoading = action.payload;
        },
        setIsInitialize(state, action){
            state.isInitialize = action.payload;
        },
        addBeerToState(state, action) {
            state.activeTasting.beers = [...state.activeTasting.beers, action.payload];
        },
        setActiveTastingRoomStatus(state, action) {
            state.activeTasting.isStart = action.payload;
        },
        setActiveTastingRoomCode(state, action) {
            state.activeTasting.code = action.payload;
        }
    }
});

export const { setActiveTasting, setIsLoading, setIsInitialize, addBeerToState, setActiveTastingRoomStatus, setActiveTastingRoomCode } = tastingSlice.actions;

export default tastingSlice.reducer;
