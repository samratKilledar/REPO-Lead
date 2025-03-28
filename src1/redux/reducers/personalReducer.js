import {
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  CHANGE_MOBILENO,
  CHANGE_EMAIL_ID,
  CHANGE_WHATSAPPNO,
  CHANGE_ADDRESS_LINE1,
  CHANGE_ADDRESS_LINE2,
  CHANGE_LEAD_SOURCE,
  CHANGE_CITY_OPTION,
  CHANGE_STATE_OPTION,
  CHANGE_PINCODE,
  CHANGE_COUNTRY_OPTION,
} from "../actions/personalAction";

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

  firstName: "",
  lastName: "",
  emailId: "",
  mobileNo: "",
  whatsAppNo: "",
  addressLine1: "",
  addressLine2: "",
  pincode: "",

  leadSourceName: [],
  cityOption: [],
  stateOption: [],
  countryOption: [],
}

const personalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PERSONAL_SUBMIT_SUCCESS":
      return { ...state, isSubmitted: true };

    case CHANGE_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload,
      };

    case CHANGE_LAST_NAME:
      return {
        ...state,
        lastName: action.payload,
      };

      case CHANGE_EMAIL_ID:
        return {
          ...state,
          emailId: action.payload,
        };
      
    case CHANGE_MOBILENO:
      return {
        ...state,
        mobileNo: action.payload,
      };

    case CHANGE_WHATSAPPNO:
      return {
        ...state,
        whatsAppNo: action.payload,
      };

    case CHANGE_ADDRESS_LINE1:
      return {
        ...state,
        addressLine1: action.payload,
      };

    case CHANGE_ADDRESS_LINE2:
      return {
        ...state,
        addressLine2: action.payload,
      };

    case CHANGE_PINCODE:
      return {
        ...state,
        pincode: action.payload,
      };
    
    case CHANGE_LEAD_SOURCE:
      return {
        ...state,
        leadSource: action.payload,
      };
      
    case CHANGE_CITY_OPTION:
      return {
        ...state,
        cityOption: action.payload,
      };
    
    case CHANGE_STATE_OPTION:
      return {
        ...state,
        stateOption: action.payload,
      };
    
    case CHANGE_COUNTRY_OPTION:
      return {
        ...state,
        countryOption: action.payload,
      };
    
    default:
      return state;
  }
};

export default personalReducer;
