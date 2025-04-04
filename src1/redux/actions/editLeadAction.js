import {   EditLeadReadData } from "../../api/apiClient";
import {EditLead} from "../../api/authApi";
import { leadAPISubmit } from "../../api/mainApi";

export const SUBMIT_SUCCESS_LEAD = "SUBMIT_SUCCESS_LEAD";
export const SUBMIT_FAILURE_LEAD = "SUBMIT_FAILURE_LEAD";
export const SUBMIT_REQUEST = "SUBMIT_REQUEST";
export const SUBMIT_FAILURE = "SUBMIT_FAILURE";
export const UPDATE_ASSIGNTO = "UPDATE_ASSIGNTO";
export const UPDATE_SERVICES = "UPDATE_SERVICES";
export const UPDATE_REMARK = "UPDATE_REMARK";
export const UPDATE_FIRSTNAME = "UPDATE_FIRSTNAME";
export const UPDATE_LASTNAME = "UPDATE_LASTNAME";
export const UPDATE_LEADSOURCES = "UPDATE_LEADSOURCES";
export const UPDATE_OTHER_SOURCE = "UPDATE_OTHER_SOURCE"; 
export const UPDATE_MOBILENO = "UPDATE_MOBILENO";
export const UPDATE_EMAILID = "UPDATE_EMAILID";
export const UPDATE_WHATSAPPNO = "UPDATE_WHATSAPPNO";
export const UPDATE_ADDRESSLINE1 = "UPDATE_ADDRESSLINE1";
export const UPDATE_ADDRESSLINE2 = "UPDATE_ADDRESSLINE2";
export const UPDATE_CITY = "UPDATE_CITY";
export const UPDATE_STATE = "UPDATE_STATE";
export const UPDATE_COUNTRY = "UPDATE_COUNTRY";
export const UPDATE_PINCODE = "UPDATE_PINCODE";
export const UPDATE_OCCUPATION = "UPDATE_OCCUPATION";
export const UPDATE_ORGANISATIONNAME="UPDATE_ORGANISATIONNAME";
export const UPDATE_TYPEOFWORK = "UPDATE_TYPEOFWORK";
export const UPDATE_MONTHLYINCOME = "UPDATE_MONTHLYINCOME";
export const EDIT_DATA_AUTO_FILL_SUCCESS = "EDIT_DATA_AUTO_FILL_SUCCESS";
export const RESET_ALL_LEAD_ID = "RESET_ALL_LEAD_ID";
// Personal Information Actions
export const updateFirstName = (firstName) => ({
  type: UPDATE_FIRSTNAME,
  payload: firstName
});

export const updateLastName = (lastName) => ({
  type: UPDATE_LASTNAME,
  payload: lastName
});

// Contact Information Actions
export const updateMobileNo = (mobileNo) => ({
  type: UPDATE_MOBILENO,
  payload: mobileNo
});

export const updateEmailId = (emailId) => ({
  type: UPDATE_EMAILID,
  payload: emailId
});

export const updateWhatsAppNo = (whatsAppNo) => ({
  type: UPDATE_WHATSAPPNO,
  payload: whatsAppNo
});

// Address Information Actions
export const updateAddressLine1 = (addressLine1) => ({
  type: UPDATE_ADDRESSLINE1,
  payload: addressLine1
});

export const updateAddressLine2 = (addressLine2) => ({
  type: UPDATE_ADDRESSLINE2,
  payload: addressLine2
});

export const updateCity = (id, name) => ({
  type: UPDATE_CITY,
  payload: { id, name }
});

export const updateState = (id, name) => ({
  type: UPDATE_STATE,
  payload: { id, name }
});

export const updateCountry = (id, name, isdCode) => ({
  type: UPDATE_COUNTRY,
  payload: { id, name, isdCode }
});

export const updatePincode = (pincode) => ({
  type: UPDATE_PINCODE,
  payload: pincode
});

// Lead Metadata Actions
export const updateLeadSources = (id, name) => ({
  type: UPDATE_LEADSOURCES,
  payload: { id, name }
});

export const updateOtherSource = (otherSource) => ({
  type: UPDATE_OTHER_SOURCE,
  payload: otherSource,
});

export const updateOccupation = (id, name) => ({
  type: UPDATE_OCCUPATION,
  payload: { id, name }
});

export const updateOrganisationName = (otherSource) => ({
  type: UPDATE_ORGANISATIONNAME,
  payload: otherSource,
}); 

export const updateTypeOfWork = (workType) => ({
  type: UPDATE_TYPEOFWORK,
  payload: workType,
});

export const updateMonthlyIncome = (monthlyIncome) => ({
  type: UPDATE_MONTHLYINCOME,
  payload: monthlyIncome
});

export const updateAssignTo = (id, name) => ({
  type: UPDATE_ASSIGNTO,
  payload: { id, name }
});

// Service Actions
export const updateServices = (serviceId) => ({
  type: UPDATE_SERVICES,
  payload: serviceId,
});

export const updateRemark = (remark) => ({
  type: UPDATE_REMARK,
  payload: remark
});




export const submitSuccess = () => ({ type: SUBMIT_SUCCESS });

export const submitFailure = (error) => ({
  type: SUBMIT_FAILURE,
  payload: error,
});

export const submitRequest = () => ({ type: SUBMIT_REQUEST });

export const updateLeadData = (data)=>({
  type: EDIT_DATA_AUTO_FILL_SUCCESS,
  payload: data,
})

export const EditLeadFetch = (leadId) => async (dispatch) => {
  try {
    if (!leadId || leadId === 'undefined') {
      throw new Error('Invalid lead ID');
    }
    const data = await EditLead(leadId);
    console.log("respo---------Edit--->"+JSON.stringify(data))
   // console.log(leadId+"respo---------Edit--->"+data.id)

    if(leadId == data.id){
      //alert(JSON.stringify(data))
      dispatch(updateLeadData(data));
    }
  } catch (error) {
    console.error("Error fetching lead:", error);
    throw error; // Re-throw for component handling
  }
};

export const resetStateLeadID = () => ({type: RESET_ALL_LEAD_ID,});