import { configureStore } from '@reduxjs/toolkit'
import icewindDaleReducer from './features/icewindDale/icewindDaleSlice'
import brynShanderReducer from './features/icewindDale/settlements/brynShanderSlice'



export const store = configureStore({
  reducer: {
    icewindDale: icewindDaleReducer,
    brynShander: brynShanderReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch