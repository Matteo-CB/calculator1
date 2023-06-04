import { createSlice } from "@reduxjs/toolkit";

export const resultSlice = createSlice({
  name: "result",
  initialState: {
    result: null,
  },
  reducers: {
    setResultData: (state, { payload }) => {
      state.result = payload;
    },
  },
});

export const { setResultData } = resultSlice.actions;
export default resultSlice.reducer;
