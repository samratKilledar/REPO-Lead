import {loginUserApiCall} from '../../api/authApi';
import { setItem } from '../../api/storageServices';

// Action Types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const CHANGE_USER_CREDENTIAL = 'CHANGE_USER_CREDENTIAL';

// ✅ Corrected loginUser function
export const loginUser = () => async (dispatch, getState) => {
  try {
    const {loginValue} = getState().auth; // Get loginValue from Redux
    //  alert(JSON.stringify(loginValue))
    const data = await loginUserApiCall(loginValue); // API call
    //alert(JSON.stringify(data));
    setItem('authToken',data); // Store token

    dispatch({ type: LOGIN_SUCCESS}); // Dispatch success action
  } catch (error) {
    dispatch({type: LOGIN_FAILURE, payload: error.message}); // Dispatch failure action
  }
};

// ✅ Login Success Action
export const loginSuccess = userData => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

// ✅ Logout Action
export const logout = () => async dispatch => {
  await AsyncStorage.removeItem('authToken');
  dispatch({type: LOGOUT});
};

// ✅ Update Credentials Action
export const updateCredential = data => ({
  type: CHANGE_USER_CREDENTIAL,
  payload: data,
});
