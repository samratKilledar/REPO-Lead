import { act } from "react";
import {  
  UPDATE_ASSIGNTO,
  UPDATE_SERVICES,
  UPDATE_REMARK,
  UPDATE_FIRSTNAME,
  UPDATE_LASTNAME,
  UPDATE_LEADSOURCES,
  UPDATE_OTHER_SOURCE,  // Add this import 
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
  UPDATE_ORGANISATIONNAME,
  UPDATE_TYPEOFWORK,
  UPDATE_MONTHLYINCOME,
  SUBMIT_REQUEST,
  SUBMIT_SUCCESS, 
  SUBMIT_FAILURE,
  SUBMIT_SUCCESS_LEAD,
  SUBMIT_FAILURE_LEAD,
  EDIT_DATA_AUTO_FILL_SUCCESS ,RESET_ALL_STATE } from "../actions/editLeadAction";
import { occupation } from "../../api/mainApi";

const initialState = {
  firstName: "",
  lastName: "", 
  leadSource: "",
  leadSourceName:"Lead Source",
  otherSource:"",
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
  organisationName:"",
  workType:"",
  monthlyIncome:"",
  assignedTo:"",
  assignedToName: "Assign To",
  serviceId:"",
  serviceName:"Services",
  remark:"",
  editLeadDataAgainstId:{}
 
};

const editLeadReducer = (state = initialState, action) => {
  if(action.type =="EDIT_DATA_AUTO_FILL_SUCCESS"){
     alert(JSON.stringify(action.payload)+"===")
  }
  switch (action.type) {

    case EDIT_DATA_AUTO_FILL_SUCCESS:
      return { ...state, editLeadDataAgainstId: action.payload };

    case UPDATE_FIRSTNAME:
      return {...state, firstName: action.payload};

    case UPDATE_LASTNAME:
      return {...state, lastName: action.payload};

      case UPDATE_LEADSOURCES:
        return { 
          ...state, 
          leadSource: action.payload.id, 
          leadSourceName: action.payload.name, 
          showNewSourceInput: action.payload.id === 12  // ✅ Show text input if ID is 12
        };
        case UPDATE_OTHER_SOURCE:  // ✅ Handle new source name
        return { 
          ...state, 
          otherSource: action.payload 
        };

    case UPDATE_MOBILENO:
      return {...state, mobileNo: action.payload};

    case UPDATE_EMAILID:
      return {...state, emailId: action.payload};

    case UPDATE_WHATSAPPNO:
      return {...state, whatsAppNo: action.payload};

    case UPDATE_ADDRESSLINE1:
      return {...state, addressLine1: action.payload};

    case UPDATE_ADDRESSLINE2:
      return {...state, addressLine2: action.payload};

    case UPDATE_CITY:
      return { ...state, cityId: action.payload.id, cityName:action.payload.name };

    case UPDATE_STATE:
      return { ...state, stateId: action.payload.id,stateName:action.payload.name };

    case UPDATE_COUNTRY:
      return { ...state, countryId: action.payload.id, countryName: action.payload.name,isdCode:action.payload.isdCode};

    case UPDATE_PINCODE:
      return {...state, pincode: action.payload};

    case UPDATE_OCCUPATION:
      return { ...state, occupation: action.payload.id, occupationName: action.payload.name,showNewCompanyInput: action.payload.id === 5};

    case UPDATE_TYPEOFWORK:
      return { ...state, workType: action.payload };

    case UPDATE_MONTHLYINCOME:
      return {...state, monthlyIncome: action.payload};

    case UPDATE_ASSIGNTO:
      return { ...state, assignedTo: action.payload.id, assignedToName:action.payload.name };

      case UPDATE_ORGANISATIONNAME:  // ✅ Handle new source name
      return { 
        ...state, 
        organisationName: action.payload 
      };

    case UPDATE_SERVICES:
      return { ...state, serviceId: action.payload.id , serviceName:action.payload.name };

    case UPDATE_REMARK:
      return {...state, remark: action.payload};

    case SUBMIT_REQUEST:
      return {...state, isLoading: true, error: null};

    case SUBMIT_SUCCESS_LEAD:
      return {
        ...state,
        messageFromServer: action.payload,
        isLoading: false,
        error: null,
      };

    case SUBMIT_FAILURE_LEAD:
      return {
        ...state,
        messageFromServer: action.payload,
        isLoading: false,
        error: action.payload,
      };
      
    // case EDIT_DATA_AUTO_FILL_SUCCESS:
    //   return {...state, editLeadDataAgainstId: action.payload}  


      case RESET_ALL_STATE:
      return initialState;

    default:
      return state;
  }
};

export default editLeadReducer;