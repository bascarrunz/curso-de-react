import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginFormData: {
    module: "ReactMod7",
    username: "",
    email: "",
    password: "mod7USIP-BETO",
  },
};

export const formSlice = createSlice({
  name: "loginFormData",
  initialState,
  reducers: {
    setInitialValue: (state, action) => {
      state.loginFormData = action.payload;
    },
    resetFormData: (state) => {
      state.loginFormData = initialState.loginFormData; 
    },
  }
});

export const { setInitialValue, resetFormData } = formSlice.actions;

export default formSlice.reducer;
