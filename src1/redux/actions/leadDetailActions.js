// export const FETCH_LEAD_SUCCESS = 'FETCH_LEAD_SUCCESS';
// export const FETCH_INSURANCE_SUCCESS = 'FETCH_INSURANCE_SUCCESS';

// export const fetchLeadSuccess = (leadData) => ({
//     type: FETCH_LEAD_SUCCESS,
//     payload: leadData,
// });

// export const fetchInsuranceSuccess = (insuranceData) => ({
//     type: FETCH_INSURANCE_SUCCESS,
//     payload: insuranceData,
// });


import axios from "axios";

export const FETCH_LEAD_REQUEST = "FETCH_LEAD_REQUEST";
export const FETCH_LEAD_SUCCESS = "FETCH_LEAD_SUCCESS";
export const FETCH_LEAD_FAILURE = "FETCH_LEAD_FAILURE";

export const fetchLeadRequest = () => ({
  type: FETCH_LEAD_REQUEST,
});

export const fetchLeadSuccess = (lead) => ({
  type: FETCH_LEAD_SUCCESS,
  payload: lead,
});

export const fetchLeadFailure = (error) => ({
  type: FETCH_LEAD_FAILURE,
  payload: error,
});

export const LeadDetailFetch = (leadId) => {
  return async (dispatch) => {
    dispatch(fetchLeadRequest());
    try {
      const response = await EditLead(leadId);
      dispatch(fetchLeadSuccess(response.data));
    } catch (error) {
      dispatch(fetchLeadFailure(error.message));
    }
  };
};
