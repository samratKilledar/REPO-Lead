// import { combineReducers } from 'redux';
// import authReducer from './authReducer';
// export default combineReducers({
//   auth: authReducer,
// });


import { combineReducers } from 'redux';
import authReducer from './authReducer';
import personalReducer from './personalReducer';

export default combineReducers({
  auth: authReducer,
  leadPersonal: personalReducer,
});

