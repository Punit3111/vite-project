
import { setUser, logout } from './Userreducer';

export const loginSuccess = (user) => (dispatch) => {
  console.log('control is here');
  dispatch(setUser(user));
  
  return {
    type: 'LOGIN_SUCCESS',
    payload: user,
  };
};

export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};
