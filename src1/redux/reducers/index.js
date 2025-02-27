import { combineReducers } from 'redux';
import authReducer from './authReducer';
import dropDownReducer from './dropDownReducer';
export default combineReducers({
  auth: authReducer,
  dropdown: dropDownReducer,
});
