import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from 'constant/baseUrl'

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async ({ categoryId, page, limit, productName }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/products`, {
        params: {
          name_like: productName,
          categoryId,
          _page: page,
          _per_page: limit,
        },
      })
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const getCurrentProduct = createAsyncThunk(
  'global/getCurrentProduct',
  async (id, { rejectWithValue }) => {
    try {
      const resp = await axios.get(`${BASE_URL}/products/${id}`)
      const data = await resp.data
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
