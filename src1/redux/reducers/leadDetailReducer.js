// import {
//     SUBMIT_CLICK,
//     SUBMIT_SUCCESS,
//     SUBMIT_FAILURE,
//     CHANGE_NAME,
//     CHANGE_MOBILE_NO,
//     CHANGE_ADDRESS,
//     CHANGE_OCCUPATION,
//     CHANGE_TYPE_OF_WORK,
//     CHANGE_MONTHLY_INCOME,
//     CHANGE_COMPANY_NAME,
//     CHANGE_LEAD_STATUS,
//     CHANGE_NEXT_MEETING_DATE,
//     CHANGE_ATTACHMENT,
//     SET_INTERESTED_SERVICES
// } from "../actions/leadDetailsActions";

// const initialState = {
//     isLoading: false,
//     error: null,

//     name: "Rajiv Sharma",
//     mobileNo: "+919876543210",
//     address: "Build 1/A, 101, Shree krishna society, Waghle Estate, Thane - 400601, Maharashtra, India",
//     occupation: "Job",
//     typeOfWork: "IT Engineer",
//     monthlyIncome: "30000",
//     companyName: "ABC Contact Pvt Ltd",
//     leadStatus: "Follow Up",
//     nextMeetingDate: "Feb 14, 2025",
//     attachmentUrl: "References.pdf",

//     interestedServices: [
//         {
//             id: 1,
//             title: "Insurance",
//             date: "20-01-2025",
//             description: "Lorem Ipsum has been the industry's standard dummy text...",
//         },
//         {
//             id: 2,
//             title: "Mutual Fund",
//             date: "20-01-2025",
//             description: "Lorem Ipsum has been the industry's standard dummy text...",
//         },
//     ],
// };

// const LeadDetailReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SUBMIT_CLICK:
//             return { ...state, isLoading: true, error: null };

//         case SUBMIT_SUCCESS:
//             return { ...state, isLoading: false, error: null };

//         case SUBMIT_FAILURE:
//             return { ...state, isLoading: false, error: action.payload };

//         case CHANGE_NAME:
//             return { ...state, name: action.payload };

//         case CHANGE_MOBILE_NO:
//             return { ...state, mobileNo: action.payload };

//         case CHANGE_ADDRESS:
//             return { ...state, address: action.payload };

//         case CHANGE_OCCUPATION:
//             return { ...state, occupation: action.payload };

//         case CHANGE_TYPE_OF_WORK:
//             return { ...state, typeOfWork: action.payload };

//         case CHANGE_MONTHLY_INCOME:
//             return { ...state, monthlyIncome: action.payload };

//         case CHANGE_COMPANY_NAME:
//             return { ...state, companyName: action.payload };

//         case CHANGE_LEAD_STATUS:
//             return { ...state, leadStatus: action.payload };

//         case CHANGE_NEXT_MEETING_DATE:
//             return { ...state, nextMeetingDate: action.payload };

//         case CHANGE_ATTACHMENT:
//             return { ...state, attachmentUrl: action.payload };

//         case SET_INTERESTED_SERVICES:
//             return { ...state, interestedServices: action.payload };

//         default:
//             return state;
//     }
// };

// export default LeadDetailReducer;



import { FETCH_LEAD_SUCCESS, FETCH_INSURANCE_SUCCESS } from '../actions/leadDetailActions'; // Update with correct file path

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
    ]
};

const leadDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LEAD_SUCCESS:
            return {
                ...state,
                LeadValue: action.payload,
            };
        case FETCH_INSURANCE_SUCCESS:
            return {
                ...state,
                InsuranceList: action.payload,
            };
        default:
            return state;
    }
};

export default leadDetailReducer;
