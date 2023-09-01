import { createSlice } from "@reduxjs/toolkit";

export interface DatasState {
  serverName: string;
  details: string;
  planName: string;
  ram: string;
  memory: string;
  cpu: string;
  networkType: string;
  systemType: string;
  passwordType: string;
  password: string;
  price: string;
}

const initialState: DatasState[] = [];

export const AllDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addToAllDatas: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToAllDatas } = AllDataSlice.actions;

export default AllDataSlice.reducer;
