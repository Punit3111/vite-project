const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('I am here');
      return {
        ...state,
        user: action.payload,
      };
      
    default:
      return state;
  }
};

export default userReducer;