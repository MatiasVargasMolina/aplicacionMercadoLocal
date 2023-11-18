import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  // Agrega otros reducers si los tienes
});

const store = configureStore({
  reducer: {
    "user":userReducer
  },
});

export default store;