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

const initialState: DatasState = {
  serverName: "test Redux",
  details: "",
  planName: "",
  ram: "",
  memory: "",
  cpu: "",
  networkType: "",
  systemType: "",
  price: "",
  passwordType: "",
  password: "",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addServer: (state, action) => {
      return {
        ...state,
        serverName: action.payload,
      };
    },
    addDetails: (state, action) => {
      return {
        ...state,
        details: action.payload,
      };
    },
    addPlanName: (state, action) => {
      return {
        ...state,
        planName: action.payload,
      };
    },
    addRam: (state, action) => {
      return {
        ...state,
        ram: action.payload,
      };
    },
    addMemory: (state, action) => {
      return {
        ...state,
        memory: action.payload,
      };
    },
    addCpu: (state, action) => {
      return {
        ...state,
        cpu: action.payload,
      };
    },
    addPasswordType: (state, action) => {
      return {
        ...state,
        passwordType: action.payload,
      };
    },
    addPassword: (state, action) => {
      return {
        ...state,
        password: action.payload,
      };
    },
    addSystemType: (state, action) => {
      return {
        ...state,
        systemType: action.payload,
      };
    },
    addNetworkType: (state, action) => {
      return {
        ...state,
        addNetworkType: action.payload,
      };
    },
    addPrice: (state, action) => {
      return {
        ...state,
        price: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addServer,
  addDetails,
  addNetworkType,
  addSystemType,
  addPassword,
  addPasswordType,
  addCpu,
  addMemory,
  addRam,
  addPlanName,
  addPrice,
} = dataSlice.actions;

export default dataSlice.reducer;
