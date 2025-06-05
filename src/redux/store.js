import { configureStore } from '@reduxjs/toolkit';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import searchReducer from './slices/searchSlice';
import { searchEpic } from './epics/searchEpics';

const rootEpic = combineEpics(searchEpic); // ✅ combine even if it's one for now

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(epicMiddleware),
});

epicMiddleware.run(rootEpic); // run the combined one

export default store;
