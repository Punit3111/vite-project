
import { createStore } from 'redux';
import userReducer from './userreducer';

const store = createStore(userReducer);

export default store;
