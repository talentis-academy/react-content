import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const incrementAsync = createAsyncThunk('counter/incrementAsync', async (amount) => {
  await new Promise(r => setTimeout(r, 1000)); return amount;
});
const counterSlice = createSlice({
  name: 'counter', initialState: { value: 0, step: 1, history: [], loading: false },
  reducers: {
    increment(state) { state.value += state.step; state.history.push(state.value); if (state.history.length > 10) state.history.shift(); },
    decrement(state) { state.value -= state.step; state.history.push(state.value); if (state.history.length > 10) state.history.shift(); },
    reset(state) { state.value = 0; state.history = []; },
    setStep(state, action) { state.step = action.payload; },
  },
  extraReducers: b => b
    .addCase(incrementAsync.pending, s => { s.loading = true; })
    .addCase(incrementAsync.fulfilled, (s, a) => { s.value += a.payload; s.history.push(s.value); s.loading = false; }),
});
export const { increment, decrement, reset, setStep } = counterSlice.actions;
export default counterSlice.reducer;
