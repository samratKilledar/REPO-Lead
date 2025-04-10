
import {
  followUp,
  clientFollowUp,
  taskPriority,
  service,
  leadSource,
  country,
  city,
  state,
  occupation,
  assignTo,
  profileDetail
} from '../../api/mainApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FETCH_DROPDOWN_SUCCESS = 'FETCH_DROPDOWN_SUCCESS';
export const FETCH_DROPDOWN_FAILURE = 'FETCH_DROPDOWN_FAILURE';
export const RESET_ALL_STATE = 'RESET_ALL_STATE';
export const FETCH_DROPDOWN_READ = 'FETCH_DROPDOWN_READ';
export const  RESET_ALL_API_STATE = 'RESET_ALL_API_STATE';
export const  SET_CITIES = 'SET_CITIES';


export const callAllDropDownAPI = (storedData) => {
  return async (dispatch) => {
    try {
      const responses = {}; // Object to store successful responses
      const errors = {};    // Object to store failed APIs

      // Helper function to call API and handle failure
      const callApi = async (apiFunc, key) => {
        try {
          const response = await apiFunc(storedData);
          responses[key] = response;
          console.log(`${key} API Response:==========================>`, JSON.stringify(response));
        } catch (error) {
          errors[key] = error.message || 'API call failed';
          console.error(`${key} API Error:=========================>`, error);
          await AsyncStorage.clear();
          console.log('Local storage cleared');
        }
      };
      dispatch({ type: FETCH_DROPDOWN_READ });
      // Sequential API calls with error handling
      await callApi(followUp, 'followUpRes');
      await callApi(clientFollowUp, 'clientFollowUpRes');
      await callApi(taskPriority, 'taskPriorityRes');
      await callApi(service, 'serviceRes');
      await callApi(leadSource, 'leadSourceRes');
      await callApi(country, 'countryRes');
      await callApi(city, 'cityRes');
      await callApi(state, 'stateRes');
      await callApi(occupation, 'occupationRes');
      await callApi(assignTo, 'assignToRes');
      // await callApi(profileDetail, 'profileDetailRes');

      // Dispatch success action with all responses
      dispatch({ type: FETCH_DROPDOWN_SUCCESS, payload: responses });
      

      // If there are any failed APIs, dispatch a failure action
      if (Object.keys(errors).length > 0) {
        dispatch({ type: FETCH_DROPDOWN_FAILURE, payload: errors });
       // dispatch({ type: RESET_ALL_API_STATE, payload: true });
      }

    } catch (error) {
      console.error('Unexpected Error:========================================================'+ error);
      // navigation.dispatch(
      //   CommonActions.reset({
      //     index: 0,
      //     routes: [{name : 'Login'}],
      //   })
      // );
      await AsyncStorage.clear();
      dispatch({ type: FETCH_DROPDOWN_FAILURE, payload: { general: error.message } });
      //dispatch({ type: RESET_ALL_API_STATE, payload: true });
    }
  };
};
export const resetStateApi = () => ({type: RESET_ALL_API_STATE});

export const setCities = (cities) => {
  return {
    type: 'SET_CITIES',
    payload: cities,
  };
};

export const fetchCitiesByStateId = (stateId) => {
  return async (dispatch) => {
    try {
      const token = await AsyncStorage.getItem("newToken");

      const url = `https://opticalerp.in:85/api/cascadecountrycitystate/getcitiesbystateid?stateId=${stateId}`;
      console.log("Fetching cities from:", url);
      console.log("Using token:", token);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'stateId': stateId.toString()
        }
      });

      console.log("Status Code:", response.status);

      response.headers.forEach((value, name) => {
        console.log(`Header: ${name} = ${value}`);
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status} - ${errorText}`);
      }

      const data = await response.json();

      console.log("Fetched cities for stateId:", stateId);
      console.log("Full API response:", data);

      // Dispatch the setCities action
      dispatch(setCities(data.cities || data)); // Assuming the API response structure

    } catch (error) {
      console.error('❌ Failed to fetch cities:', error.message);
    }
  };
};
