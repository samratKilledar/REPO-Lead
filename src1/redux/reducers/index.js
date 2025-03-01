// index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import statusReducer from './statusReducer';
import editProfileReducer from './editProfileReducer';
import leadAddServiceReducer from './leadAddServiceReducer';
export default combineReducers({
  auth: authReducer,
  status: statusReducer,
  editProfile: editProfileReducer,
  leadAddService: leadAddServiceReducer,
});
