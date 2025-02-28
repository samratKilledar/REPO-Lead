import { combineReducers } from 'redux';
import authReducer from './authReducer';
// import statusReducer from './statusReducer';
export default combineReducers({
  auth: authReducer,
  // status: statusReducer,
});
