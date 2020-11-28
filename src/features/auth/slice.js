import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: 'Janusz',
      email: 'janusz.król@gmail.com',
    },
  }
});

export default userSlice.reducer;
