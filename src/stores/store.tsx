import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../features/AddDatas";
import AllDataSlice from "../features/Datas";
import profileSlice from "../features/Profile";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    allDatas: AllDataSlice,
    profile: profileSlice,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
