import { createSlice } from '@reduxjs/toolkit'

import { categories, products } from '../../mockData'

const initialState = {
  products: products,
  categories: categories,
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {},
})

export const {} = globalSlice.actions

export default globalSlice.reducer
