import { combineReducers } from 'redux';
import authReducer from './authReducer';
import homeReducer from './homeReducer';
import addTaskReducer from './addTaskReducer';
export default combineReducers({
  auth: authReducer,
  homeReducer: homeReducer,
  addTask:addTaskReducer,
});
