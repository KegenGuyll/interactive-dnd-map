import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface InitialState {
  value: number
}

const initialState: InitialState = {
  value: 0,
}

export const icewindDaleSlice = createSlice({
  name: 'icewindDale',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = icewindDaleSlice.actions

export default icewindDaleSlice.reducer

