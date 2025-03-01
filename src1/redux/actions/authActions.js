import {loginUserApiCall,readAllLead,fetchDropdownDataApi} from '../../api/authApi';
import { setItem } from '../../api/storageServices';

// Action Types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const CHANGE_USER_CREDENTIAL = 'CHANGE_USER_CREDENTIAL';
export const READ_ALL_LEAD = 'READ_ALL_LEAD';
export const READ_ALL_LEAD_FAIL = 'READ_ALL_LEAD_FAIL';
export const FETCH_DROPDOWN_SUCCESS = 'FETCH_DROPDOWN_SUCCESS';
export const FETCH_DROPDOWN_FAIL = 'FETCH_DROPDOWN_FAIL';


// ✅ Corrected loginUser function
export const loginUser = () => async (dispatch, getState) => {
  try {
    const {loginValue} = getState().auth; // Get loginValue from Redux
    //  alert(JSON.stringify(loginValue))
    const data = await loginUserApiCall(loginValue); // API call
    // alert(JSON.stringify(data));
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

export const getReadAllLead=async()=> {
  try {
    //  alert(JSON.stringify(loginValue))
    console.log(1111)
    const data = await readAllLead(); // API call
    //alert(JSON.stringify(data));
    //setItem('authToken',data); // Store token
    alert(data)
    dispatch({ type: READ_ALL_LEAD,payload:data}); // Dispatch success action
  } catch (error) {
    dispatch({type: READ_ALL_LEAD_FAIL, payload: error.message}); // Dispatch failure action
  }
};

// //  Fetch Dropdown Data
// export const fetchDropdownData = (apiType) => async (dispatch) => {
//   try {
//       const data = await fetchDropdownDataApi(apiType);
//       dispatch({ type: FETCH_DROPDOWN_SUCCESS, payload: { apiType, data } });
//   } catch (error) {
//       dispatch({ type: FETCH_DROPDOWN_FAIL, payload: error.message });
//   }
// };

export const fetchDropdownData = (apiType) => async (dispatch, getState) => {
  const existingData = getState().auth.dropdowns[apiType]; // ✅ Check if data exists

  if (existingData && existingData.length) return; // ✅ Avoid duplicate calls

  try {
      const data = await fetchDropdownDataApi(apiType); 
      dispatch({ type: "FETCH_DROPDOWN_SUCCESS", payload: { apiType, data } });
  } catch (error) {
      console.error(`Error fetching ${apiType} data:`, error);
  }
};

