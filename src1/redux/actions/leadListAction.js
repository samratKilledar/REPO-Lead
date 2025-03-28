// import {LeadList} from '../../api/authApi';
// import {setItem, getItem} from '../../api/storageServices';

// export const FETCH_LEADS_REQUEST = "FETCH_LEADS_REQUEST";
// export const FETCH_LEADS_SUCCESS = "FETCH_LEADS_SUCCESS";
// export const FETCH_LEADS_FAILURE = "FETCH_LEADS_FAILURE";

// export const fetchLeadsRequest = () => ({
//   type: FETCH_LEADS_REQUEST,
// });

// export const fetchLeadsSuccess = (leads) => ({
//   type: FETCH_LEADS_SUCCESS,
//   payload: leads,
// });

// export const fetchLeadsFailure = (error) => ({
//   type: FETCH_LEADS_FAILURE,
//   payload: error,
// });


// export const fetchLeads = () => async (dispatch) => {
//   dispatch(fetchLeadsRequest());
//   try {
//     const data = await LeadList();
//     console.log("API Response Data:", data); 
//     dispatch(fetchLeadsSuccess(data));
//   } catch (error) {
//     console.error("Error fetching leads:", error.message); // Log the error message
//     dispatch(fetchLeadsFailure(error.message));
//   }
// };




import {LeadList} from '../../api/authApi';
import {setItem, getItem} from '../../api/storageServices';

export const FETCH_LEADS_REQUEST = "FETCH_LEADS_REQUEST";
export const FETCH_LEADS_SUCCESS = "FETCH_LEADS_SUCCESS";
export const FETCH_LEADS_FAILURE = "FETCH_LEADS_FAILURE";

export const fetchLeadsRequest = () => ({
  type: FETCH_LEADS_REQUEST,
});

export const fetchLeadsSuccess = (leads) => ({
  type: FETCH_LEADS_SUCCESS,
  payload: leads,
});

export const fetchLeadsFailure = (error) => ({
  type: FETCH_LEADS_FAILURE,
  payload: error,
});

const getFormattedDate = (date) => {
  return date.toISOString().split('T')[0]; // YYYY-MM-DD format
};

export const fetchLeads = () => async (dispatch) => {
  dispatch(fetchLeadsRequest());
  try {
    const today = new Date();
    const fromDate = getFormattedDate(new Date(today.getFullYear(), today.getMonth(), 1)); // First day of the month
    const toDate = getFormattedDate(today); // Today's date
    
    const apiUrl = `https://opticalerp.in:85/api/lead/getlist/get-all?fromdate=${fromDate}&todate=${toDate}`;
    
    const data = await LeadList(apiUrl);
    console.log("API Response Data:", data);
    dispatch(fetchLeadsSuccess(data));
  } catch (error) {
    console.error("Error fetching leads:", error.message);
    dispatch(fetchLeadsFailure(error.message));
  }
};



