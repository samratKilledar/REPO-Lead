import { act } from "react";
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
  SUBMIT_REQUEST,
  SUBMIT_SUCCESS, 
  SUBMIT_FAILURE,EDIT_DATA_AUTO_FILL_SUCCESS,RESET_ALL_STATE  } from "../actions/editLeadAction";
import { occupation } from "../../api/mainApi";

const initialState = {
  firstName: "",
  lastName: "", 
  leadSources: "",
  leadSourcesName:"",
  mobileNo:"",
  emailId:"",
  whatsAppNo:"",
  addressLine1:"",
  addressLine2:"",
  city:"",
  cityName:"",
  state:"",
  stateName:"",
  country:"",
  countryName:"",
  isdCode:"",
  pincode:"",
  occupation:"",
  occupationName:"",
  typeOfWork:"",
  monthlyIncome:"",
  assignTo:"",
  services:"",
  servicesName:"",
  remark:"",
  editLeadDataAgainstId:{}
 
};

const editLeadReducer = (state = initialState, action) => {
  if(action.type =="EDIT_DATA_AUTO_FILL_SUCCESS"){
     alert(JSON.stringify(action.payload)+"===")
  }
  switch (action.type) {
    case UPDATE_FIRSTNAME:
      return { ...state, firstName: action.payload };

    case UPDATE_LASTNAME:
      return { ...state, lastName: action.payload };

    case UPDATE_LEADSOURCES:
      return { ...state, leadSources: action.payload.id, leadSourcesName:action.payload.name };

    case UPDATE_MOBILENO:
      return { ...state, mobileNo: action.payload };

    case UPDATE_EMAILID:
      return { ...state, emailId: action.payload };

    case UPDATE_WHATSAPPNO:
      return { ...state, whatsAppNo: action.payload };

    case UPDATE_ADDRESSLINE1:
      return { ...state, addressLine1: action.payload };

    case UPDATE_ADDRESSLINE2:
      return { ...state, addressLine2: action.payload };

    case UPDATE_CITY:
      return { ...state, city: action.payload.id, cityName:action.payload.name };

    case UPDATE_STATE:
      return { ...state, state: action.payload.id,stateName:action.payload.name };

    case UPDATE_COUNTRY:
      return { ...state, country: action.payload.id, countryName: action.payload.name,isdCode:action.payload.isdCode};

    case UPDATE_PINCODE:
      return { ...state, pincode: action.payload };

    case UPDATE_OCCUPATION:
      return { ...state, occupation: action.payload.id, occupationName: action.payload.name};

    case UPDATE_TYPEOFWORK:
      return { ...state, typeOfWork: action.payload };

    case UPDATE_MONTHLYINCOME:
      return { ...state, monthlyIncome: action.payload };

    case UPDATE_ASSIGNTO:
      return { ...state, assignTo: action.payload };

    case UPDATE_SERVICES:
      return { ...state, services: action.payload.id , servicesName:action.payload.name };

    case UPDATE_REMARK:
      return { ...state, remark: action.payload };

    case SUBMIT_REQUEST: 
      return { ...state, isLoading: true, error: null };

      case SUBMIT_SUCCESS:
      return { ...state, isAuthenticated: true ,  isLoading: false, error: null, };

    case SUBMIT_FAILURE:
      return { ...state, isAuthenticated: false , isLoading: false, error: action.payload};
      
    case EDIT_DATA_AUTO_FILL_SUCCESS:
      return {...state, editLeadDataAgainstId: action.payload}  


      case RESET_ALL_STATE:
      return initialState;

    default:
      return state;
  }
};

export default editLeadReducer;