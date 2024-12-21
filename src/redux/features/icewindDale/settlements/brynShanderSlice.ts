import { TownService } from '@/types/townServices'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface InitialState {
  selectedTownService: TownService | undefined
}

const initialState: InitialState = {
  selectedTownService: undefined
}

export const brynShanderSlice = createSlice({
  name: 'brynShander',
  initialState,
  reducers: {
    setSelectedTownService: (state, action: PayloadAction<TownService | undefined>) => {
      state.selectedTownService = action.payload
    }
  },
})

export const { setSelectedTownService } = brynShanderSlice.actions

export default brynShanderSlice.reducer

