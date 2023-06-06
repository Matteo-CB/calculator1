import { createSlice } from "@reduxjs/toolkit";

export const resultSlice = createSlice({
  name: "result",
  initialState: {
    result: "0",
    tip: "0"
  },
  reducers: {
    setResultData: (state, { payload }) => {
      state.result = payload;
    },
    setTipData: (state, { payload }) => {
      state.tip = payload;
    },
    resetResultData: (state) => {
      state.result = "0";
      state.tip = "0";
    },
  },
});

export const { setResultData, setTipData, resetResultData } = resultSlice.actions;
export default resultSlice.reducer;
