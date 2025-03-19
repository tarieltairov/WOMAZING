import { configureStore } from '@reduxjs/toolkit'

import globalReducer from './globalSlise'

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
