// import { combineReducers } from 'redux';
// import authReducer from './authReducer';
// export default combineReducers({
//   auth: authReducer,
// });


import { combineReducers } from 'redux';
import authReducer from './authReducer';
import homeReducer from './homeReducer';
import lastReducer from './lastReducer';
import personalReducer from './personalReducer';
export default combineReducers({
  auth: authReducer,
  homeReducer: homeReducer,
  lastReducer: lastReducer,
  personalReducer: personalReducer
});

