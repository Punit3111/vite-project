import {configureStore} from '@reduxjs/toolkit';
import Userreducer from './Userreducer';

const store = configureStore({
  reducer: {
    user: Userreducer,

  },
});

export default store;

  