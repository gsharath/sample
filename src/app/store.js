import { configureStore } from '@reduxjs/toolkit';
import {LoginReducer} from '../features/login/Login.reducer';


export const store = configureStore({
  reducer: {
    currentLogin: LoginReducer,
  },
});
