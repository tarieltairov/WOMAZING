import { createSlice } from '@reduxjs/toolkit'
import { getProducts } from 'api/action'
import { categories } from 'constant/categories'

const initialState = {
  products: [],
  categories: categories,
  loading: false,
  error: null,
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.loading = false
      state.products = payload
    })
    builder.addCase(getProducts.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload.message
    })
  },
})

export const {} = globalSlice.actions

export default globalSlice.reducer
