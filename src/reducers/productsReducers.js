// src/reducers/productsReducer.js
import { createSlice } from '@reduxjs/toolkit';
import products from '../data/Producs.json';

const productsSlice = createSlice({
  name: 'products',
  initialState: products,
  reducers: {},
});

export default productsSlice.reducer;
