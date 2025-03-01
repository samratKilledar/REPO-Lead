import {LOGIN_SUCCESS,LOGIN_CLICK,CHANGE_USER_CREDENTIAL} from '../actions/authActions';
const initialState = {
  isAuthenticated: false,
  isLoading:false,
  loginPlaceHolder: {
    customerId: "Customer Id",
    email: "Email",
    password: "Password"
  },
  loginValue: {
    customerId: "",
    email: "",
    password: ""
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'LOGIN_SUCCESS':
          return { ...state, isAuthenticated: true };

      case 'LOGOUT':
          return { ...state, isAuthenticated: false };

      case CHANGE_USER_CREDENTIAL:
          return { 
              ...state, 
              loginValue: { 
                  ...state.loginValue,  // Keep previous values
                  ...action.payload     // Update only the fields provided
              }
          };

      // ✅ Store dropdown data
      case 'FETCH_DROPDOWN_SUCCESS':
          return {
              ...state,
              dropdowns: {
                  ...state.dropdowns,
                  [action.payload.apiType]: action.payload.data,
              },
          };

      // ✅ Handle dropdown errors
      case 'FETCH_DROPDOWN_FAIL':
          return {
              ...state,
              error: action.payload,
          };

      default:
          return state;
  }
};

export default authReducer;
