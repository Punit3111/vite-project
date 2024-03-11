export const loginSuccess = (user) => {
  console.log('control is here');
  return {
    type: 'LOGIN_SUCCESS',
    payload: user,
  };
};
  