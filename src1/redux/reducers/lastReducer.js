// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Async API call to submit the lead
// export const addLead = createAsyncThunk("lead/addLead", async (leadData, { rejectWithValue }) => {
//   try {
//     const response = await fetch("https://api.example.com/leads", {
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

// // Lead slice
// const leadSlice = createSlice({
//   name: "lead",
//   initialState: {
//     personal: {},
//     occupation: {},
//     services: {},
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     saveServicesData: (state, action) => {
//       state.services = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(addLead.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(addLead.fulfilled, (state) => {
//         state.loading = false;
//       })
//       .addCase(addLead.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { saveServicesData } = leadSlice.actions;
// export default leadSlice.reducer;


// Updated according to action.js
// import { createSlice } from "@reduxjs/toolkit";
// import { addLead } from "../actions/lastAction";

// const leadSlice = createSlice({
//   name: "lead",
//   initialState: {
//     personal: {},
//     occupation: {},
//     services: {},
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     saveServicesData: (state, action) => {
//       state.services = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(addLead.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(addLead.fulfilled, (state) => {
//         state.loading = false;
//       })
//       .addCase(addLead.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { saveServicesData } = leadSlice.actions;
// export default leadSlice.reducer;

// AddserviceReducer.js

import { UPDATE_ASSIGNTO, UPDATE_SERVICES, UPDATE_REMARK } from '../actions/lastAction'
const initialState = {
  remark: "",

  // for Dropdown 
  assignto: [],
  services: [], // Array to store fetched services

};

const lastReducer = (state = initialState, action) => {
  switch (action.type) {
    // case 'FETCH_SERVICES_REQUEST':
    //   return { ...state, servicesLoading: true, servicesError: null };

    // case 'FETCH_SERVICES_SUCCESS':
    //   return { ...state, servicesLoading: false, services: action.payload };

    // case 'FETCH_SERVICES_FAILURE':
    //   return { ...state, servicesLoading: false, servicesError: action.payload };

    case UPDATE_ASSIGNTO:
      return { ...state, assignto: action.payload };

    case UPDATE_SERVICES:
      return { ...state, services: action.payload };

    case UPDATE_REMARK:
      return { ...state, remark: action.payload };
      
    default:
      return state;
  }
};

export default lastReducer;