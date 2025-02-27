import { combineReducers } from 'redux';
import authReducer from './authReducer';
import forgotPassReducer from './forgotPassReducer';
import dropDownReducer from './dropDownReducer'; 
export default combineReducers({
  auth: authReducer,
  forgotPassReducer: forgotPassReducer,
  priority:dropDownReducer,
});
