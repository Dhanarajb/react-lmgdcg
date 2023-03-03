import { configureStore } from '@reduxjs/toolkit';
import ApiSlice from './ApiSlice';

const store = configureStore({
  reducer: ApiSlice,
});
export default store;
