export const FETCH_LEAD_SUCCESS = 'FETCH_LEAD_SUCCESS';
export const FETCH_INSURANCE_SUCCESS = 'FETCH_INSURANCE_SUCCESS';

export const fetchLeadSuccess = (clientData) => ({
    type: FETCH_LEAD_SUCCESS,
    payload: clientData,
});

export const fetchInsuranceSuccess = (insuranceData) => ({
    type: FETCH_INSURANCE_SUCCESS,
    payload: insuranceData,
});
