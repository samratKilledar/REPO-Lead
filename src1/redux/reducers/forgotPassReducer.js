// const initialState = {
//     isAuthenticated: false,
//     emailPlaceHolder: {
//       email: "Email",
//     },
//     emailValue: {
//       email: "Supra@admin.com",
//     }
//   };

//   const forgotPassReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'EMAIL_SUCCESS':
//             return { ...state, isAuthenticated: true };
  
//         case 'CHANGE_EMAIL_CREDENTIAL':
//             return { 
//                 ...state, 
//                 emailValue: { 
//                     ...state.emailValue,  // Keep previous values
//                     ...action.payload     // Update only the fields provided
//                 } 
//             };
  
//         default:
//             return state;
//     }
//   };
  
//   export default forgotPassReducer;
  
import { 
  EMAIL_SUCCESS, 
  EMAIL_FAILURE, 
  CHANGE_EMAIL_CREDENTIAL, 
  EMAIL_CLICK 
} from '../actions/forgotPassAction';

const initialState = {
  isAuthenticated: false,
  emailPlaceHolder: {
    email: "Email",
    
  },
  emailValue: {
    email: "",
    customerId:"",
  },
  loading: false, // Tracks API request status
  success: false, // Indicates if request was successful
  error: null, // Stores error message (if any)
};

const forgotPassReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CLICK:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };

    case EMAIL_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        success: true,
        error: null,
      };

    case EMAIL_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload, // Store error message
      };

    case CHANGE_EMAIL_CREDENTIAL:
      return {
        ...state,
        emailValue: {
          ...state.emailValue, // Keep previous values
          ...action.payload, // Update only the fields provided
        },
      };

    default:
      return state;
  }
};

export default forgotPassReducer;

