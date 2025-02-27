// // import { LEAD_SUCCESS, LEAD_FAILURE, UPDATE_LEAD_CREDENTIALS } from "../typer";
// import { ADD_LEAD_REQUEST, ADD_LEAD_SUCCESS, ADD_LEAD_FAILURE } from "../actions/personalAction";

// const initialState = {
//   leadData: {
//     firstName: "",
//     lastName: "",
//     mobileNo: "",
//     emailId: "",
//     whatsappNo: "",
//     addressLine1: "",
//     addressLine2: "",
//     pincode: "",
//     leadService: "",
//     city: "",
//     state: "",
//     country: "",
//   },
//   loading: false,
//   error: null,
// };

// const leadReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case UPDATE_LEAD_CREDENTIALS:
//       return {
//         ...state,
//         leadData: {
//           ...state.leadData,
//           [action.payload.field]: action.payload.value,
//         },
//       };

//     case LEAD_SUCCESS:
//       return { ...state, loading: false, error: null };

//     case LEAD_FAILURE:
//       return { ...state, loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };

// export default leadReducer;


// src/redux/reducers/leadReducer.js
// import { ADD_LEAD_REQUEST, ADD_LEAD_SUCCESS, ADD_LEAD_FAILURE } from "../actions/personalAction";

// const initialState = {
//   loading: false,
//   lead: null,
//   error: null,
// };

// const leadReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_LEAD_REQUEST:
//       return { ...state, loading: true, error: null };
//     case ADD_LEAD_SUCCESS:
//       return { ...state, loading: false, lead: action.payload };
//     case ADD_LEAD_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// export default leadReducer;

//New Code 
const initialState = {
  firstName: '',
  lastName: '',
  mobileNo: '',
  emailId: '',
  whatsappNo: '',
  addressLine1: '',
  addressLine2: '',
  pincode: '',
  leadService: '',
  city: '',
  state: '',
  country: '',
  loading: false,
  error: null,
};

const personalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.payload.field]: action.payload.value };

    case 'SUBMIT_REQUEST':
      return { ...state, loading: true, error: null };

    case 'SUBMIT_SUCCESS':
      return { ...initialState, loading: false }; // Reset form on success

    case 'SUBMIT_FAILURE':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default personalReducer;

