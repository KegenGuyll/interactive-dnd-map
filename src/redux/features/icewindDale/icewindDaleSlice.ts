import { Settlement } from '@/types/settlement'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface InitialState {
  selectedSettlement: Settlement | undefined
}

const initialState: InitialState = {
  selectedSettlement: undefined
}

export const icewindDaleSlice = createSlice({
  name: 'icewindDale',
  initialState,
  reducers: {
    setSelectedSettlement: (state, action: PayloadAction<Settlement | undefined>) => {
      state.selectedSettlement = action.payload
    }
  },
})

export const { setSelectedSettlement } = icewindDaleSlice.actions

export default icewindDaleSlice.reducer

