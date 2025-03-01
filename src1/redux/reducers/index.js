import { combineReducers } from 'redux';
import authReducer from './authReducer';
import addTaskReducer from './addTaskReducer';
// import statusReducer from './statusReducer';
export default combineReducers({
  auth: authReducer,
  // status: statusReducer,
  addTask:addTaskReducer,
});
