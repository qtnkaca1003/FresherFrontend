import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface AppState {
  size: {
    width: number
    height: number
  }
  loading?: boolean
  isOpenMenu: boolean
}

const initialState: AppState = {
  size: {
    width: 0,
    height: 0,
  },
  loading: false,
  isOpenMenu: false,
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppSize: (
      state,
      action: PayloadAction<{ width: number; height: number }>,
    ) => {
      state.size = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpenMenu = action.payload
    },
  },
})

export const { setAppSize, setLoading, setMenuOpen } = appSlice.actions

export default appSlice.reducer
