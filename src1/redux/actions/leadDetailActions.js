export const FETCH_LEAD_SUCCESS = 'FETCH_LEAD_SUCCESS';
export const FETCH_INSURANCE_SUCCESS = 'FETCH_INSURANCE_SUCCESS';

export const fetchLeadSuccess = (leadData) => ({
    type: FETCH_LEAD_SUCCESS,
    payload: leadData,
});

export const fetchInsuranceSuccess = (insuranceData) => ({
    type: FETCH_INSURANCE_SUCCESS,
    payload: insuranceData,
});
