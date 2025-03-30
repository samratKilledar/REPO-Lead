

import { FETCH_LEADS_REQUEST, FETCH_LEADS_SUCCESS, FETCH_LEADS_FAILURE } from "../actions/leadListAction";

const initialState = {
  // Individual fields from the API response
  id: null,
  firstName: '',
  lastName: '',
  mobileNo: '',
  whatsAppNo: '',
  addressLine1: '',
  addressLine2: '',
  cityName: '',
  stateName: '',
  countryName: '',
  pincode: '',
  occupationName: '',
  workType: '',
  monthlyIncome: 0,
  organisationName: '',
  leadStatusName: '',
  leadDate: '',
  // Other fields
  InsuranceList: [],
  loading: false,
  error: null,
};

const leadDetailReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case FETCH_LEADS_SUCCESS:

      return {
        ...state,
        ...action.payload,  // Directly spreading the transformedData
        loading: false,
        error: null,
      };

    case FETCH_LEADS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload || "An error occurred",
      };

    default:
      return state;
  }
};


export default leadDetailReducer;