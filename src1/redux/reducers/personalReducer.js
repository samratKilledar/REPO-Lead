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

//New Code Eve --> 
const initialState = {
  firstNamePlaceholder: "",
  lastNamePlaceholder: "",
  leadSourceNamePlaceholder: "",
  emailIdPlaceholder: "",
  mobileNoPlaceholder: "",
  whatsAppNoPlaceholder: "",
  addressLine1Placeholder: "",
  addressLine2Placeholder: "",
  pincodePlaceholder: "",


//Actual Vaues 
  firstName: "",
  lastName: "",
  emailId: "",
  mobileNo: "",
  whatsAppNo: "",
  addressLine1: "",
  addressLine2: "",
  pincode: "",

// For dropdown
  leadSourceName: [],
  cityOption: [],
  stateOption: [],
  countryOption: [],
}

const personalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PERSONAL_SUBMIT_SUCCESS":
      return { ...state, isSubmitted: true };

    case "CHANGE_FIRST_NAME":
      return {
        ...state,
        firstName: action.payload,
      };

    case "CHANGE_LAST_NAME":
      return {
        ...state,
        lastName: action.payload,
      };

    case "CHANGE_EMAIL":
      return {
        ...state,
        email: action.payload,
      };

    case "CHANGE_MOBILENO":
      return {
        ...state,
        mobileNo: action.payload,
      };

    case "CHANGE_WHATSAPPNO":
      return {
        ...state,
        whatsAppNo: action.payload,
      };

    case "CHANGE_ADDRESS_LINE1":
      return {
        ...state,
        addressLine1: action.payload,
      };

    case "CHANGE_ADDRESS_LINE2":
      return {
        ...state,
        addressLine2: action.payload,
      };

    case "CHANGE_PINCODE":
      return {
        ...state,
        pincode: action.payload,
      };
    
  // for dropdown
    case "CHANGE_LEAD_SOURCE":
      return {
        ...state,
        leadSource: action.payload,
      };
      
    case "CHANGE_CITY_OPTION":
      return {
        ...state,
        cityOption: action.payload,
      };
    
    case "CHANGE_STATE_OPTION":
      return {
        ...state,
        stateOption: action.payload,
      };
    
    case "CHANGE_COUNTRY_OPTION":
      return {
        ...state,
        countryOption: action.payload,
      };
    
    default:
      return state;
  }
};

export default personalReducer;
