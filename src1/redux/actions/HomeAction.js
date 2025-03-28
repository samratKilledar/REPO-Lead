
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

export const FETCH_DROPDOWN_SUCCESS = 'FETCH_DROPDOWN_SUCCESS';
export const FETCH_DROPDOWN_FAILURE = 'FETCH_DROPDOWN_FAILURE';

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
          console.log(`${key} API Response:`, JSON.stringify(response));
        } catch (error) {
          errors[key] = error.message || 'API call failed';
          console.error(`${key} API Error:`, error);
        }
      };

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
      }

    } catch (error) {
      console.error('Unexpected Error:', error);
      dispatch({ type: FETCH_DROPDOWN_FAILURE, payload: { general: error.message } });
    }
  };
};

