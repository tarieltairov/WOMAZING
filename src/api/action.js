import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from 'constant/baseUrl'

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async ({ categoryId, page, limit }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/products`, {
        params: {
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
