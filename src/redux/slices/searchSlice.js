import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    suggestions: [],
    history: [],
  },
  reducers: {
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
    addToHistory: (state, action) => {
      const item = action.payload;
      // Remove existing if already in list (to reinsert on top)
      state.history = state.history.filter((h) => h !== item);
      // Add to top
      state.history.unshift(item);
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const { setSuggestions, addToHistory, clearHistory } = searchSlice.actions;
export default searchSlice.reducer;
