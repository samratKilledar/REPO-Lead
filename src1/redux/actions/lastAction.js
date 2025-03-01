// import { createAsyncThunk } from "@reduxjs/toolkit";

// // Async action for submitting the lead data to an API
// export const addLead = createAsyncThunk("lead/addLead", async (leadData, { rejectWithValue }) => {
//   try {
//     const response = await fetch("https://opticalerp.in:85/swagger/index.html#/Lead/Lead_Create", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(leadData),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to submit lead");
//     }
//     return await response.json();
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// });

// // Action for saving services data locally before submission
// export const saveServicesData = (data) => ({
//   type: "lead/saveServicesData",
//   payload: data,
// });

//New one 01-03
export const UPDATE_ASSIGNTO = "UPDATE_ASSIGNTO";
export const UPDATE_SERVICES = "UPDATE_SERVICES";
export const UPDATE_REMARK = "UPDATE_REMARK"; 
// API Call Function
// const fetchServicesAPI = async () => {
//   try {
//     const response = await fetch(
//       "https://opticalerp.in:85/api/udc/getvaluesbytype?type=Services"
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP Error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// Action Creator for Fetching Services Dropdown
export const fetchServices = () => async (dispatch) => {
  dispatch({ type: FETCH_SERVICES_REQUEST });

  try {
    const data = await fetchServicesAPI(); // Fetch data from API
    dispatch({ type: FETCH_SERVICES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_SERVICES_FAILURE, payload: error.message });
  }
};

// Action Creator for AssignTo Dropdown
export const updateAssignTo = (assignto) => ({
  type: "UPDATE_ASSIGNTO",
  payload: assignto,
});

// Action Creator for Services Dropdown
export const updateServices = (services) => ({
  type: "UPDATE_SERVICES",
  payload: services,
});

// Action Creator for Remark Field
export const updateRemark = (remark) => ({
  type: "UPDATE_REMARK",
  payload: remark,
});



