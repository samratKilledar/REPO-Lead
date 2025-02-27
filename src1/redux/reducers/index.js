// index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import AddserviceReducer from './AddserviceReducer'; // Import the AddserviceReducer

export default combineReducers({
  auth: authReducer,
  Addservice: AddserviceReducer, // Add the AddserviceReducer
});