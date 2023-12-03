import { configureStore } from '@reduxjs/toolkit'
import { Reducerfun } from './Reducer'
export const store = configureStore({
  reducer: {counter : Reducerfun},
})