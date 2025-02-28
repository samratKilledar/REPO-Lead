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

// // Action Types
// export const UPDATE_FIELD = 'UPDATE_FIELD';
// export const SUBMIT_REQUEST = 'SUBMIT_REQUEST';
// export const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';
// export const SUBMIT_FAILURE = 'SUBMIT_FAILURE';

// // API Call Function
// const submitLeadApiCall = async (leadData) => {
//   try {
//     const response = await fetch('https://opticalerp.in:85/api/lead/create/create', { // Replace with your API endpoint
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(leadData),
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// // Action Creators
// export const updateField = (field, value) => ({
//   type: UPDATE_FIELD,
//   payload: { field, value },
// });

// export const submitLead = (leadData) => async (dispatch) => {
//   dispatch({ type: SUBMIT_REQUEST });

//   try {
//     const data = await submitLeadApiCall(leadData);
//     dispatch({ type: SUBMIT_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: SUBMIT_FAILURE, payload: error.message });
//   }
// };

//Eve --> 

export const PERSONAL_SUBMIT_SUCCESS = 'PERSONAL_SUBMIT_SUCCESS';
export const CHANGE_PERSONAL_FIELD = 'CHANGE_PERSONAL_FIELD';
export const CHANGE_FIRST_NAME = "CHANGE_FIRST_NAME";
export const CHANGE_LAST_NAME = "CHANGE_LAST_NAME";
export const CHANGE_EMAIL_ID = "CHANGE_EMAIL_ID";
export const CHANGE_MOBILENO = "CHANGE_MOBILENO";
export const CHANGE_ADDRESS_LINE1 = "CHANGE_ADDRESSLINE1";
export const CHANGE_ADDRESS_LINE2 = "CHANGE_ADDRESSLINE2";
export const CHANGE_PINCODE = "CHANGE_PINCODE";

export const CHANGE_LEAD_SOURCE = "CHANGE_LEAD_SOURCE";
export const CHANGE_CITY_OPTION = "CHANGE_CITY_OPTION";
export const CHANGE_STATE_OPTION = "CHANGE_STATE_OPTION";
export const CHANGE_COUNTRY_OPTION = "CHANGE_COUNTRY_OPTION";



// Async Action for Submitting Personal Details
export const submitPersonalDetails = () => {
  return async (dispatch, getState) => {
    const { personalValue } = getState().personalReducer; // Get personalValue from Redux
    // console.log(personalValue);

    try {
      const response = await fetch('https://opticalerp.in:85/api/lead/create/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'tenant': personalValue.email, // Example tenant header
        },
        body: JSON.stringify({
          firstName: personalValue.firstName,
          lastName: personalValue.lastName,

          emailId: personalValue.emailId,
          Mobileno: personalValue.Mobileno,
          WhatsappNo: personalValue.WhatsappNo,
          addressLine1: personalValue.addressLine1,  
          addressLine2: personalValue.addressLine2,
        }),
      });

      const data = await response.json();
      alert(JSON.stringify(data));

      if (response.ok) {
        dispatch({ type: PERSONAL_SUBMIT_SUCCESS, payload: data });
      } else {
        throw new Error(data.message || 'Failed to submit personal details!');
      }
    } catch (error) {
      alert(error.message);
    }
  };
};

// Action for Successful Submission
export const personalSubmitSuccess = () => ({
  type: PERSONAL_SUBMIT_SUCCESS,
});

// Action for Updating Personal Fields
export const updatePersonalField = (data) => ({
  type: CHANGE_PERSONAL_FIELD,
  payload: data,
});

export const updatefirstName = (data) =>({
  type: CHANGE_FIRST_NAME,
  payload: data,
});

export const updatelastName = (data) =>({
  type: CHANGE_LAST_NAME,
  payload: data,
});

export const updateemailId = (data) =>({
  type: CHANGE_EMAIL_ID,
  payload: data,
});

export const updateMobileno = (data) =>({
  type: CHANGE_MOBILENO,
  payload: data,
});

export const updateAddressLine1 = (data) =>({
  type: CHANGE_ADDRESS_LINE1,
  payload: data,
});

export const updateAddressLine2 = (data) =>({
  type: CHANGE_ADDRESS_LINE2,
  payload: data,
});

export const updatePincode = (data) =>({
  type: CHANGE_PINCODE,
  payload: data,
});

export const updateleadSource = (data) =>({
  type: CHANGE_LEAD_SOURCE,
  payload: data,
});

export const updateCity = (data) =>({
  type: CHANGE_CITY,
  payload: data,
});

export const updateState = (data) =>({
  type: CHANGE_STATE,
  payload: data,
});

export const updateCountry = (data) =>({
  type: CHANGE_COUNTRY,
  payload: data,
});






