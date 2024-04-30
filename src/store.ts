import { configureStore } from '@reduxjs/toolkit';
import board from './boardSlice';

const store = configureStore({
  reducer: {
    board,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
