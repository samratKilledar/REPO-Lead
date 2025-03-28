import { leadDetailsAPI } from "../../api/mainApi";
export const FETCH_LEAD_SUCCESS = 'FETCH_LEAD_SUCCESS';
export const FETCH_LEAD_FAILURE = 'FETCH_LEAD_FAILURE';
export const FETCH_INSURANCE_SUCCESS = 'FETCH_INSURANCE_SUCCESS';
export const FETCH_INSURANCE_FAILURE = 'FETCH_INSURANCE_FAILURE';

export const fetchLeadSuccess = (leadData) => ({
    type: FETCH_LEAD_SUCCESS,
    payload: leadData,
});

export const fetchLeadFailure = (error) => ({
    type: FETCH_LEAD_FAILURE,
    payload: error,
});

export const fetchInsuranceSuccess = (insuranceData) => ({
    type: FETCH_INSURANCE_SUCCESS,
    payload: insuranceData,
});

export const fetchInsuranceFailure = (error) => ({
    type: FETCH_INSURANCE_FAILURE,
    payload: error,
});

export const fetchLeadDetails = () => async (dispatch) => {
    try {
        const response = await leadDetailsAPI();  // API call function

        if (response) {
            dispatch(fetchLeadSuccess(response.LeadValue || {}));  // Ensure it's always an object
            dispatch(fetchInsuranceSuccess(response.InsuranceList || []));  // Ensure it's always an array
        } else {
            throw new Error("No response received from the API");
        }
    } catch (error) {
        dispatch(fetchLeadFailure(error.message));
        dispatch(fetchInsuranceFailure(error.message));
        console.error("Error fetching lead details:", error.message);
    }
};