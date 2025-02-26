import { combineReducers } from 'redux';
import authReducer from './authReducer';
import forgotPassReducer from './forgotPassReducer';
export default combineReducers({
  auth: authReducer,
  forgotPassReducer: forgotPassReducer,
});
