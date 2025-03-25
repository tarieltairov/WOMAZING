import { createSlice } from '@reduxjs/toolkit'
import { getCurrentProduct, getProducts, signIn, signUp } from 'api/action'
import { categories } from 'constant/categories'

const initialState = {
  responseForProducts: {},
  categories: categories,
  loading: false,
  error: null,
  isCurrentProductLoading: false,
  currentProduct: {},
  currentProductError: null,
  user: null,
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
      state.responseForProducts = payload
    })
    builder.addCase(getProducts.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload.message
    })

    builder
      .addCase(getCurrentProduct.pending, (state) => {
        state.isCurrentProductLoading = true
      })
      .addCase(getCurrentProduct.fulfilled, (state, { payload }) => {
        state.isCurrentProductLoading = false
        state.currentProduct = payload
      })
      .addCase(getCurrentProduct.rejected, (state, { payload }) => {
        state.isCurrentProductLoading = false
        state.currentProductError = payload
      })

    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.user = payload
    })

    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.user = payload
    })
  },
})

export const {} = globalSlice.actions

export default globalSlice.reducer
