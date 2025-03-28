

import { FETCH_LEAD_SUCCESS, FETCH_LEAD_FAILURE,  FETCH_INSURANCE_SUCCESS , FETCH_INSURANCE_FAILURE } from '../actions/leadDetailActions'; // Update with correct file path

const initialState = {
    LeadPlaceholder: {
        name: "Name",
        mobileNo: "Mobile No",
        address: "Address",
        occupation: "Occupation",
        typeOfWork: "Type of Work",
        monthlyIncome: "Monthly Income",
        companyName: "Company Name",
        leadStatus: "Lead Status",
        nextMeetingDate: "Next Meeting Date",
        attachment: "Attachment"
    },
    LeadValue: {
        name: "Rajiv Sharma",
        mobileNo: "+919876543210",
        address: "Build 1/A, 101, Shree Krishna Society, Waghle Estate, Thane - 400601, Maharashtra, India.",
        occupation: "Job",
        typeOfWork: "IT Engineer",
        monthlyIncome: "30000",
        companyName: "ABC Contact Pvt Ltd",
        leadStatus: "Follow Up",
        nextMeetingDate: "2025-02-14",
        attachment: "References.pdf"
    },
 
    InsuranceList: [
        {
            id: 1,
            title: "Insurance",
            date: "2025-01-20",
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
        },
        {
            id: 2,
            title: "Mutual Fund",
            date: "2025-01-20",
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
        }
    ],
    error: null
};

const leadDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LEAD_SUCCESS:
            return {
                ...state,
                LeadValue: action.payload,
                error: null
            };
        case FETCH_LEAD_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case FETCH_INSURANCE_SUCCESS:
            return {
                ...state,
                InsuranceList: action.payload,
                error: null
            };
        case FETCH_INSURANCE_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default leadDetailReducer;
