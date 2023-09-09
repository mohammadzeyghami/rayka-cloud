import { createSlice } from "@reduxjs/toolkit";

export interface Portfolio {
  name: string;
  lastName: string;
  phoneNumber: string;
  city: string;
}

const initialState: Portfolio = {
  name: "",
  lastName: "",
  phoneNumber: "",
  city: "",
};

export const profileSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addPoprtfolioName: (state, action) => {
      return {
        ...state,
        name: action.payload,
      };
    },
    addPoprtfolioLastName: (state, action) => {
      return {
        ...state,
        lastName: action.payload,
      };
    },
    addPoprtfolioPhoneNumber: (state, action) => {
      return {
        ...state,
        phoneNumber: action.payload,
      };
    },
    addPoprtfolioCity: (state, action) => {
      return {
        ...state,
        city: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addPoprtfolioCity,
  addPoprtfolioLastName,
  addPoprtfolioName,
  addPoprtfolioPhoneNumber,
} = profileSlice.actions;

export default profileSlice.reducer;
