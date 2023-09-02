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

const DatasState: any = [
  {
    serverName: "custom1",
    details: "this is test message",
    planName: "something",
    ram: "4Gb",
    memory: "500GB",
    cpu: "8",
    networkType: "Private",
    systemType: "Windows",
    passwordType: "Private",
    password: "Something",
    price: "85$",
  },
  {
    serverName: "custom1",
    details: "this is test message",
    planName: "something",
    ram: "4Gb",
    memory: "500GB",
    cpu: "8",
    networkType: "Private",
    systemType: "Windows",
    passwordType: "Private",
    password: "Something",
    price: "85$",
  },
  {
    serverName: "custom1",
    details: "this is test message",
    planName: "something",
    ram: "4Gb",
    memory: "500GB",
    cpu: "8",
    networkType: "Private",
    systemType: "Windows",
    passwordType: "Private",
    password: "Something",
    price: "85$",
  },
  {
    serverName: "custom1",
    details: "this is test message",
    planName: "something",
    ram: "4Gb",
    memory: "500GB",
    cpu: "8",
    networkType: "Private",
    systemType: "Windows",
    passwordType: "Private",
    password: "Something",
    price: "85$",
  },
];

export const AllDataSlice = createSlice({
  name: "datas",
  DatasState,
  reducers: {
    addToAllDatas: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToAllDatas } = AllDataSlice.actions;

export default AllDataSlice.reducer;
