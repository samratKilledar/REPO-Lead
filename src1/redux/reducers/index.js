import { combineReducers } from 'redux';
import authReducer from './authReducer';
import homeReducer from './homeReducer';
import addFollowUpReducer from './addFollowUpReducer';
export default combineReducers({
  auth: authReducer,
  homeReducer: homeReducer,
  addFollowUp : addFollowUpReducer
});
