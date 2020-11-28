import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/slice';
import authReducer from '../features/auth/slice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
