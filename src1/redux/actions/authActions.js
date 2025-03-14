import {loginUserApiCall, readAllLead} from '../../api/authApi';
import {setItem, getItem} from '../../api/storageServices';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const CHANGE_USER_CREDENTIAL = 'CHANGE_USER_CREDENTIAL';
export const READ_ALL_LEAD = 'READ_ALL_LEAD';
export const READ_ALL_LEAD_FAIL = 'READ_ALL_LEAD_FAIL';
export const LOGIN_CLICK = 'LOGIN_CLICK';

export const loginUser = () => async (dispatch, getState) => {
  try {
    const {loginValue} = getState().auth; 
    dispatch({type: LOGIN_CLICK});
    //  alert(JSON.stringify(loginValue))
    const data = await loginUserApiCall(loginValue);
    if (data.token != null) {
      //alert(JSON.stringify(data));
      setItem('authToken', data.token); 
      dispatch({type: LOGIN_SUCCESS}); 
    } else {
      dispatch({type: LOGIN_FAILURE, payload: error.message}); 
    }
  } catch (error) {
    dispatch({type: LOGIN_FAILURE, payload: error.message}); 
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

export const getReadAllLead = async () => {
  try {
    //  alert(JSON.stringify(loginValue))
    console.log(1111);
    const data = await readAllLead(); // API call
    //alert(JSON.stringify(data));
    //setItem('authToken',data); // Store token
    alert("===>"+data);
    dispatch({type: READ_ALL_LEAD, payload: data});
  } catch (error) {
    dispatch({type: READ_ALL_LEAD_FAIL, payload: error.message}); 
  }
};
