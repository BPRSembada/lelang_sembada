import { createSlice } from "@reduxjs/toolkit";

const pagLelang = createSlice({
  name: "pagination_lelang",
  initialState: {
    data: "all",
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setData } = pagLelang.actions;
export default pagLelang.reducer;
