import {act} from 'react';
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
  SUBMIT_SUCCESS_LEAD,
  SUBMIT_FAILURE_LEAD,
  RESET_ALL_STATE,
  SET_ALL_DATA_DEFAULT_FOR_EDIT,
} from '../actions/lastAction';

const initialState = {
  firstName: "Pranjali",
  lastName: "patil", 
  leadSource: "",
  leadSourceName:"Lead Source",
  otherSource:"",
  mobileNo:"9860763112",
  emailId:"pranju@gmail.com",
  whatsAppNo:"",
  addressLine1:"c",
  addressLine2:"c",
  cityId:"",
  cityName:"Select City",
  stateId:"",
  stateName:"Select State",
  countryId:"",
  countryName:"Select Country",
  isdCode:"",
  pincode:"123456",
  occupation:"",
  occupationName:"Occupation Name",
  organisationName:"",
  workType:"it",
  monthlyIncome:"60000",
  assignedTo:"",
  assignedToName: "Assign To",
  serviceId:"",
  serviceName:"Services",
  remark:"bhj",
  messageFromServer:""
};

const lastReducer = (state = initialState, action) => {
  if (action.type == 'SET_ALL_DATA_DEFAULT_FOR_EDIT') {
    alert(JSON.stringify(action.payload) + '===');
  }
  switch (action.type) {
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

    case SET_ALL_DATA_DEFAULT_FOR_EDIT:
      return {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        leadSources: action.payload.leadSource,
        leadSourcesName: action.payload.leadSourceName,
        mobileNo: action.payload.mobileNo,
        emailId: action.payload.emailId,
        whatsAppNo: action.payload.whatsAppNo,
        addressLine1: action.payload.addressLine1,
        addressLine2: action.payload.addressLine2,
        cityId: action.payload.cityId,
        cityName: action.payload.cityName,
        stateId: action.payload.cityId,
        stateName: action.payload.stateName,
        countryId: action.payload.stateId,
        countryName: action.payload.countryName,
        isdCode: action.payload.countryId,
        pincode: action.payload.pincode,
        occupation: action.payload.occupation,
        occupationName: action.payload.occupationName,
        typeOfWork: action.payload.workType,
        monthlyIncome: action.payload.monthlyIncome,
        assignedTo: action.payload.assignedTo,
        assignedToName: action.payload.assignedToName,
        services: action.payload.serviceDetails,
        servicesName: 'Services',
        remark: '',
        messageFromServer: '',
      };

    case RESET_ALL_STATE:
      return initialState;

    default:
      return state;
  }
};

export default lastReducer;
