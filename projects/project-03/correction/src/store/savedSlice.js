import { createSlice } from "@reduxjs/toolkit";
const savedSlice = createSlice({
  name: "saved",
  initialState: { items: [] },
  reducers: {
    toggleSaved: (state, { payload }) => {
      const exists = state.items.some((r) => r.id === payload.id);
      if (exists) state.items = state.items.filter((r) => r.id !== payload.id);
      else state.items.push(payload);
    },
  },
});
export const { toggleSaved } = savedSlice.actions;
export default savedSlice.reducer;
