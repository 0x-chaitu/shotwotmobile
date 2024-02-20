import {combineReducers} from '@reduxjs/toolkit';
// slices
import userReducer from './slice/userSlice';
import masterReducer from './slice/masterSlice';

const rootReducer = combineReducers({
  user: userReducer,
  master: masterReducer,
});

export default rootReducer;
