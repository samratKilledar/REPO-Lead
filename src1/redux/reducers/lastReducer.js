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
  SUBMIT_SUCCESS_LEAD, 
  SUBMIT_FAILURE_LEAD,RESET_ALL_STATE  } from "../actions/lastAction";


const initialState = {
  firstName: "",
  lastName: "", 
  leadSources: "",
  leadSourcesName:"Lead Source",
  mobileNo:"",
  emailId:"",
  whatsAppNo:"",
  addressLine1:"",
  addressLine2:"",
  cityId:"",
  cityName:"Select City",
  stateId:"",
  stateName:"Select State",
  countryId:"",
  countryName:"Select Country",
  isdCode:"",
  pincode:"",
  occupation:"",
  occupationName:"Occupation Name",
  typeOfWork:"it",
  monthlyIncome:"",
  assignedTo:"",
  assignedToName: "Assign To",
  services:"",
  servicesName:"Services",
  remark:"",
  messageFromServer:""
};

const lastReducer = (state = initialState, action) => {
  // if(action.type =="UPDATE_SERVICES"){
  //   alert(JSON.stringify(action.payload)+"===")
  // }
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
      return { ...state, cityId: action.payload.id, cityName:action.payload.name };

    case UPDATE_STATE:
      return { ...state, stateId: action.payload.id,stateName:action.payload.name };

    case UPDATE_COUNTRY:
      return { ...state, countryId: action.payload.id, countryName: action.payload.name,isdCode:action.payload.isdCode};

    case UPDATE_PINCODE:
      return { ...state, pincode: action.payload };

    case UPDATE_OCCUPATION:
      return { ...state, occupation: action.payload.id, occupationName: action.payload.name};

    case UPDATE_TYPEOFWORK:
      return { ...state, typeOfWork: action.payload };

    case UPDATE_MONTHLYINCOME:
      return { ...state, monthlyIncome: action.payload };

    case UPDATE_ASSIGNTO:
      return { ...state, assignedTo: action.payload.id, assignedToName:action.payload.name };

    case UPDATE_SERVICES:
      return { ...state, services: action.payload.id , servicesName:action.payload.name };

    case UPDATE_REMARK:
      return { ...state, remark: action.payload };

    case SUBMIT_REQUEST:
      return { ...state, isLoading: true, error: null };

      case SUBMIT_SUCCESS_LEAD:
      return { ...state, messageFromServer: action.payload ,  isLoading: false, error: null, };

    case SUBMIT_FAILURE_LEAD:
      return { ...state, messageFromServer: action.payload , isLoading: false, error: action.payload};
      
    case RESET_ALL_STATE:
      return initialState

    default:
      return state;
  }
};

export default lastReducer;