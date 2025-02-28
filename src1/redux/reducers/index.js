// import { combineReducers } from 'redux';
// import authReducer from './authReducer';
// export default combineReducers({
//   auth: authReducer,
// });


import { combineReducers } from 'redux';
import authReducer from './authReducer';
import homeReducer from './homeReducer';
export default combineReducers({
  auth: authReducer,
  homeReducer: homeReducer
});

