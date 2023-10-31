// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../reducers/productsReducers';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});


export default store