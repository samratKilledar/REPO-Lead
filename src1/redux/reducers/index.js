import { combineReducers } from 'redux';
import authReducer from './authReducer';
import homeReducer from './homeReducer';
import addFollowUpReducer from './addFollowUpReducer';
import addTaskReducer from './addTaskReducer';
import editProfileReducer from './editProfileReducer';
import leadAddServiceReducer from './leadAddServiceReducer';
import personalReducer from './personalReducer';
import lastReducer from './lastReducer';
import occupationReducer from './occupationReducer';
import forgotPassReducer from './forgotPassReducer';
import createPassReducer from './createPassReducer';


export default combineReducers({
  auth: authReducer,
  forgotPassReducer:forgotPassReducer,
  createPass: createPassReducer,
  homeReducer: homeReducer,
  addFollowUp : addFollowUpReducer,
  addTask:addTaskReducer,
  editProfile: editProfileReducer,
  leadAddService: leadAddServiceReducer,
  personalReducer : personalReducer,
  lastReducer: lastReducer,
  occupationReducer: occupationReducer,
});

