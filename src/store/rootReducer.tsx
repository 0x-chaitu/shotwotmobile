import {combineReducers} from '@reduxjs/toolkit';
// slices
import userReducer from './slice/userSlice';
import briefReducer from './slice/briefSlice';

const rootReducer = combineReducers({
  user: userReducer,
  brief: briefReducer,
});

export default rootReducer;
