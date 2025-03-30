import {   EditLeadReadData } from "../../api/apiClient";
import {EditLead} from "../../api/authApi";
import { leadAPISubmit } from "../../api/mainApi";

export const SUBMIT_SUCCESS = "SUBMIT_SUCCESS";
export const SUBMIT_FAILURE = "SUBMIT_FAILURE";
export const SUBMIT_REQUEST = "SUBMIT_REQUEST";
export const UPDATE_ASSIGNTO = "UPDATE_ASSIGNTO";
export const UPDATE_SERVICES = "UPDATE_SERVICES";
export const UPDATE_REMARK = "UPDATE_REMARK";
export const UPDATE_FIRSTNAME = "UPDATE_FIRSTNAME";
export const UPDATE_LASTNAME = "UPDATE_LASTNAME";
export const UPDATE_LEADSOURCES = "UPDATE_LEADSOURCES";
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
export const UPDATE_TYPEOFWORK = "UPDATE_TYPEOFWORK";
export const UPDATE_MONTHLYINCOME = "UPDATE_MONTHLYINCOME";


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

export const updateOccupation = (id, name) => ({
  type: UPDATE_OCCUPATION,
  payload: { id, name }
});

export const updateTypeOfWork = (typeOfWork) => ({
  type: UPDATE_TYPEOFWORK,
  payload: typeOfWork
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
export const updateServices = (services) => ({
  type: UPDATE_SERVICES,
  payload: services
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

export const EditLeadFetch = (leadId) => async (dispatch) => {
  try {
    if (!leadId || leadId === 'undefined') {
      throw new Error('Invalid lead ID');
    }

    const data = await EditLead(leadId);
    alert(JSON.stringify(data))
    // if (!data || data.error) {
    //   throw new Error(data?.error || 'Lead data not found');
    // }
    
    // // Dispatch updates - add null checks for nested objects
    // dispatch(updateFirstName(data.firstName || ''));
    // dispatch(updateLastName(data.lastName || ''));
    // dispatch(updateLeadSources(data.leadSource?.id || '', data.leadSource?.name || 'Lead Sources'));
    // dispatch(updateMobileNo(data.mobileNo || ''));
    // dispatch(updateEmailId(data.emailId || ''));
    // dispatch(updateWhatsAppNo(data.whatsAppNo || ''));
    // dispatch(updateAddressLine1(data.addressLine1 || ''));
    // dispatch(updateAddressLine2(data.addressLine2 || ''));
    // dispatch(updateCity(data.cityId?.id || '', data.city?.name || 'Select City'));
    // dispatch(updateState(data.stateId?.id || '', data.state?.name || 'Select State'));
    // dispatch(updateCountry(data.countryId?.id || '', data.country?.name || 'Select Country', data.country?.isdCode || ''));
    // dispatch(updatePincode(data.pincode || ''));
    // dispatch(updateOccupation(data.occupation?.id || '', data.occupation?.name || 'Occupation'));
    // dispatch(updateTypeOfWork(data.workType || ''));
    // dispatch(updateMonthlyIncome(data.monthlyIncome || ''));
    // dispatch(updateAssignTo(data.assignedTo || ''));
    // dispatch(updateServices(data.serviceId?.id || '', data.serviceId?.name || 'Services'));
    // dispatch(updateRemark(data.remark || ''));
    
    // dispatch(submitSuccess());
    // return data; // Return the data for component-level checks
  } catch (error) {
    console.error("Error fetching lead:", error);
    throw error; // Re-throw for component handling
  }
};



export const leadSubmitAllData = () => async (dispatch, getState) => {
  dispatch({ type: SUBMIT_REQUEST });

  const { editLeadReducer } = getState();
  const leadData = {
    id: 0,
    tenantId: "root",
    customerId: 0,
    entity: "someEntityValue", 
    firstName: editLeadReducer.firstName,
    lastName: editLeadReducer.lastName,
    emailId: editLeadReducer.emailId ,
    mobileNo: editLeadReducer.mobileNo ,
    whatsAppNo: editLeadReducer.whatsAppNo,
    addressLine1: editLeadReducer.addressLine1,
    addressLine2: editLeadReducer.addressLine2 ,
    city : editLeadReducer.city ,
    cityName : editLeadReducer.cityName,
    state : editLeadReducer.state,
    stateName : editLeadReducer.stateName,
    country : editLeadReducer.country,
    countryName : editLeadReducer.countryName,
    pincode: editLeadReducer.pincode,
    leadSources: editLeadReducer.leadSources ,
    leadSourcesName: editLeadReducer.leadSourcesName,
    occupation: editLeadReducer.occupation ,
    occupationName: editLeadReducer.occupationName ,
    typeOfWork: editLeadReducer.typeOfWork ,
    assignedTo: Number(editLeadReducer.assignedTo) || 2, 
    leadDate: new Date().toISOString(),
    isActive: true,
    serviceDetails: editLeadReducer.serviceDetails || [
      {
        id: 0,
        customerId: 0,
        services : editLeadReducer.services ,
        servicesName : editLeadReducer.servicesName ,
        isExistingClient: true,
        remark: editLeadReducer.remark,
        assignedTo: Number(editLeadReducer.assignedTo) || 0, // ✅ Ensure it's an integer
        isActive: true,
      },
    ],
  };
  console.log("📤 Submitting Lead Data:", JSON.stringify(leadData, null, 2));


  try {
    const response = await leadAPISubmit(leadData, "root");
    console.log("✅ Lead Submitted Successfully:", response);

    dispatch({ type: SUBMIT_SUCCESS, payload: response });
  } catch (error) {
    console.error("❌ Lead Submission Failed:", error);

    dispatch({ type: SUBMIT_FAILURE, error: error.message });
  }
};