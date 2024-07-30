// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/authSlice';
import  usersReducer  from './redux/usersSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
