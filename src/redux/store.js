import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/slice';
import tastingReducer from '../features/tasting/slice';

export default configureStore({
  reducer: {
    auth: authReducer,
    tasting: tastingReducer,
  },
});
