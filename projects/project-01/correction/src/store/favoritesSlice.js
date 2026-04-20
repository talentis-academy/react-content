import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { items: [] },
  reducers: {
    toggleFavorite: (state, action) => {
      const exists = state.items.some((c) => c.id === action.payload.id);
      if (exists) {
        state.items = state.items.filter((c) => c.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
