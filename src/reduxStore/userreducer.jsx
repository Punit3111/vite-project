import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isUserLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isUserLoggedIn = true;
    },
    logout(state){
      state.user = null;
      state.isUserLoggedIn = false;
    },
  },
});
   
export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
