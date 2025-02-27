// Action Types
export const FETCH_SERVICES_REQUEST = 'FETCH_SERVICES_REQUEST';
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export const FETCH_SERVICES_FAILURE = 'FETCH_SERVICES_FAILURE';

// API Call Function
const fetchServicesApiCall = async () => {
  try {
    const response = await fetch('https://opticalerp.in:85/api/udc/getvaluesbytype?type=Services'); // Replace with your API endpoint
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Action Creators
export const fetchServices = () => async (dispatch) => {
  dispatch({ type: FETCH_SERVICES_REQUEST });

  try {
    const data = await fetchServicesApiCall(); // Fetch data from the API
    dispatch({ type: FETCH_SERVICES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_SERVICES_FAILURE, payload: error.message });
  }
};


