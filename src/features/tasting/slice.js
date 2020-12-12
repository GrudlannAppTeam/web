import { createSlice } from '@reduxjs/toolkit';

export const tastingSlice = createSlice({
  name: 'tasting',
  initialState: {
    isLoading: false,
    isInitialize: false,
    activeTasting: null
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
    }
  }
});

export const { setActiveTasting, setIsLoading, setIsInitialize } = tastingSlice.actions;

export default tastingSlice.reducer;
