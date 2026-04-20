import { createSlice } from "@reduxjs/toolkit";
const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: { items: [] },
  reducers: {
    toggleWatchlist: (state, { payload }) => {
      const exists = state.items.some((m) => m.id === payload.id);
      if (exists) state.items = state.items.filter((m) => m.id !== payload.id);
      else state.items.push(payload);
    },
  },
});
export const { toggleWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
