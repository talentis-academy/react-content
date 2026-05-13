import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart', initialState: { items: [] },
  reducers: {
    addToCart(state, { payload: p }) {
      const existing = state.items.find(i => i.id === p.id);
      if (existing) { existing.quantity += 1; }
      else { state.items.push({ id: p.id, name: p.name, price: p.price, quantity: 1 }); }
    },
    removeFromCart(state, { payload: id }) { state.items = state.items.filter(i => i.id !== id); },
    updateQuantity(state, { payload: { id, quantity } }) {
      if (quantity <= 0) { state.items = state.items.filter(i => i.id !== id); }
      else { const item = state.items.find(i => i.id === id); if (item) item.quantity = quantity; }
    },
    clearCart(state) { state.items = []; },
  },
});
export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
