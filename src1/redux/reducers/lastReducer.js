 import { UPDATE_ASSIGNTO, 
  UPDATE_SERVICES, 
  UPDATE_REMARK,
  UPDATE_FIRSTNAME,
  UPDATE_LASTNAME,
  UPDATE_LEADSOURCES,
  UPDATE_MOBILENO,
  UPDATE_EMAILID,
  UPDATE_WHATSAPPNO,
  UPDATE_ADDRESSLINE1,
  UPDATE_ADDRESSLINE2,
  UPDATE_CITY,
  UPDATE_STATE,
  UPDATE_COUNTRY,
  UPDATE_PINCODE,
  UPDATE_OCCUPATION,
  UPDATE_TYPEOFWORK,
  UPDATE_MONTHLYINCOME,
  SUBMIT_SUCCESS, 
  SUBMIT_FAILURE  } from "../actions/lastAction";

const initialState = {
  firstName: "",
  lastName: "", 
  leadSources: "",
  mobileNo:"",
  emailId:"",
  whatsAppNo:"",
  addressLine1:"",
  addressLine2:"",
  city:"",
  state:"",
  country:"",
  pincode:"",
  occupation:"",
  typeOfWork:"",
  monthlyIncome:"",
  assignTo:"",
  services:"",
  remark:""

 
};

const lastReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FIRSTNAME:
      return { ...state, firstName: action.payload };

    case UPDATE_LASTNAME:
      return { ...state, lastName: action.payload };

    case UPDATE_LEADSOURCES:
      return { ...state, leadSources: action.payload };

    case UPDATE_MOBILENO:
      return { ...state, mobileNo: action.payload };

    case UPDATE_EMAILID:
      return { ...state, emaiId: action.payload };

    case UPDATE_WHATSAPPNO:
      return { ...state, whatsAppNo: action.payload };

    case UPDATE_ADDRESSLINE1:
      return { ...state, addressLine1: action.payload };

    case UPDATE_ADDRESSLINE2:
      return { ...state, addressLine2: action.payload };

    case UPDATE_CITY:
      return { ...state, city: action.payload };

    case UPDATE_STATE:
      return { ...state, state: action.payload };

    case UPDATE_COUNTRY:
      return { ...state, country: action.payload };

    case UPDATE_PINCODE:
      return { ...state, pincode: action.payload };

    case UPDATE_OCCUPATION:
      return { ...state, occupation: action.payload };

    case UPDATE_TYPEOFWORK:
      return { ...state, typeOfWork: action.payload };

    case UPDATE_MONTHLYINCOME:
      return { ...state, monthlyIncome: action.payload };

    case UPDATE_ASSIGNTO:
      return { ...state, assignTo: action.payload };

    case UPDATE_SERVICES:
      return { ...state, services: action.payload };

    case UPDATE_REMARK:
      return { ...state, remark: action.payload };

    case SUBMIT_SUCCESS:
      return { ...state, isAuthenticated: true };

    case SUBMIT_FAILURE:
      return { ...state, isAuthenticated: false };

    default:
      return state;
  }
};

export default lastReducer;
