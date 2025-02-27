// import { LEAD_SUCCESS, LEAD_FAILURE, UPDATE_LEAD_CREDENTIALS } from "../type";

// export const addLeadPersonal = (leadData) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch("https://opticalerp.in:85/api/lead/create/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(leadData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         dispatch({ type: LEAD_SUCCESS, payload: data });
//       } else {
//         throw new Error(data.message || "Failed to add lead");
//       }
//     } catch (error) {
//       dispatch({ type: LEAD_FAILURE, payload: error.message });
//     }
//   };
// };

// // Action to update form input fields
// export const updateLeadCredentials = (field, value) => ({
//   type: UPDATE_LEAD_CREDENTIALS,
//   payload: { field, value },
// });


// src/redux/actions/leadActions.js

// Action Types
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const SUBMIT_REQUEST = 'SUBMIT_REQUEST';
export const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';
export const SUBMIT_FAILURE = 'SUBMIT_FAILURE';

// API Call Function
const submitLeadApiCall = async (leadData) => {
  try {
    const response = await fetch('https://opticalerp.in:85/api/lead/create/create', { // Replace with your API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Action Creators
export const updateField = (field, value) => ({
  type: UPDATE_FIELD,
  payload: { field, value },
});

export const submitLead = (leadData) => async (dispatch) => {
  dispatch({ type: SUBMIT_REQUEST });

  try {
    const data = await submitLeadApiCall(leadData);
    dispatch({ type: SUBMIT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SUBMIT_FAILURE, payload: error.message });
  }
};
