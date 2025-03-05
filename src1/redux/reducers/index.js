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
import occupationReducer from './occupationReducer';
export default combineReducers({
  auth: authReducer,
  homeReducer: homeReducer,
  lastReducer: lastReducer,
  personalReducer: personalReducer,
  occupationReducer: occupationReducer,
});

