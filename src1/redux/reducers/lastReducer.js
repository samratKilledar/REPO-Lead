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
  SUBMIT_SUCCESS, 
  SUBMIT_FAILURE  } from "../actions/lastAction";
import { occupation } from "../../api/mainApi";

const initialState = {
  firstName: "s",
  lastName: "ss", 
  leadSources: "",
  leadName:"Lead Sources",
  mobileNo:"7798417997",
  emailId:"sam@gmail.com",
  whatsAppNo:"779841779",
  addressLine1:"2qe",
  addressLine2:"wfqwac",
  city:"",
  cityName:"Select City",
  state:"",
  stateName:"Select State",
  country:"",
  countryName:"Select Country",
  isdCode:"",
  pincode:"415262",
  occupation:"",
  occupationName:"Occupation Name",
  typeOfWork:"",
  monthlyIncome:"34344",
  assignTo:"",
  services:"",
  servicesName:"Services=",
  remark:"ednkjnf"

 
};

const lastReducer = (state = initialState, action) => {
  if(action.type =="UPDATE_SERVICES"){
    alert(JSON.stringify(action.payload)+"===")
  }
  switch (action.type) {
    case UPDATE_FIRSTNAME:
      return { ...state, firstName: action.payload };

    case UPDATE_LASTNAME:
      return { ...state, lastName: action.payload };

    case UPDATE_LEADSOURCES:
      return { ...state, leadSources: action.payload.id, leadName:action.payload.name };

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
      return { ...state, state: action.payload.state,stateName:action.payload.name };

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

    case SUBMIT_SUCCESS:
      return { ...state, isAuthenticated: true };

    case SUBMIT_FAILURE:
      return { ...state, isAuthenticated: false };

    default:
      return state;
  }
};

export default lastReducer;
