// import { combineReducers } from 'redux';
// import authReducer from './authReducer';
// export default combineReducers({
//   auth: authReducer,
// });


import { combineReducers } from 'redux';
import authReducer from './authReducer';
import personalReducer from './personalReducer';
// import statusReducer from './statusReducer';
export default combineReducers({
  auth: authReducer,
  personal: personalReducer
  // status: statusReducer,
});

