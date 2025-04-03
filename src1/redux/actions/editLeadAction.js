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
export const RESET_ALL_STATE = "RESET_ALL_STATE";
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
    console.log(leadId+"respo---------Edit--->"+JSON.stringify(data))

    const data = await EditLead(leadId);
    console.log("respo---------Edit--->"+JSON.stringify(data))
    if(leadId == data.id){
      //alert(JSON.stringify(data))
      dispatch(updateLeadData(data));
    }
  } catch (error) {
    console.error("Error fetching lead:", error);
    throw error; // Re-throw for component handling
  }
};

import { getItem } from "../../api/storageServices";

export const leadEditSubmitAllData = (updateServices) => async (dispatch, getState) => { 
  console.log("🚀 Function Called - leadEditSubmitAllData()");

  dispatch({ type: SUBMIT_REQUEST });

  const state = getState();
  //console.log("🛠️ Full Redux State:", state);  

  const lastReducer = state?.editLeadReducer; 
  const editLeadDataAgainstId = state?.editLeadReducer?.editLeadDataAgainstId;
  const user = await getItem("tenantId");

  if (!editLeadDataAgainstId || !editLeadDataAgainstId.id) {
    console.error("❌ Lead ID is missing, cannot edit.");
    dispatch({ type: SUBMIT_FAILURE, error: "Lead ID is required for editing." });
    return;
  }

  console.log("📌 editLeadDataAgainstId:", editLeadDataAgainstId); 
  console.log("📌 editLeadDataAgainstId.id:", editLeadDataAgainstId?.id);

  const leadData = {
    id: editLeadDataAgainstId.id,
    tenantId: user,
    customerId: editLeadDataAgainstId.customerId || 0,
    entity: editLeadDataAgainstId.entity || "someEntityValue", 
    firstName: lastReducer?.firstName || editLeadDataAgainstId.firstName,
    lastName: lastReducer?.lastName || editLeadDataAgainstId.lastName,
    emailId: lastReducer?.emailId || editLeadDataAgainstId.emailId,
    leadSource: lastReducer?.leadSource || editLeadDataAgainstId.leadSource,
    leadSourceName: lastReducer?.leadSourceName || editLeadDataAgainstId.leadSourceName,
    otherSource: lastReducer?.otherSource || editLeadDataAgainstId.otherSource,
    mobileNo: lastReducer?.mobileNo || editLeadDataAgainstId.mobileNo,
    whatsAppNo: lastReducer?.whatsAppNo || editLeadDataAgainstId.whatsAppNo,
    addressLine1: lastReducer?.addressLine1 || editLeadDataAgainstId.addressLine1,
    addressLine2: lastReducer?.addressLine2 || editLeadDataAgainstId.addressLine2,
    cityId: lastReducer?.cityId || editLeadDataAgainstId.cityId,
    cityName: lastReducer?.cityName || editLeadDataAgainstId.cityName,
    stateId: lastReducer?.stateId || editLeadDataAgainstId.stateId,
    stateName: lastReducer?.stateName || editLeadDataAgainstId.stateName,
    countryId: lastReducer?.countryId || editLeadDataAgainstId.countryId,
    countryName: lastReducer?.countryName || editLeadDataAgainstId.countryName,
    pincode: lastReducer?.pincode || editLeadDataAgainstId.pincode,
    occupation: lastReducer?.occupation || editLeadDataAgainstId.occupation,
    occupationName: lastReducer?.occupationName || editLeadDataAgainstId.occupationName,
    workType: lastReducer?.workType || editLeadDataAgainstId.workType,
    monthlyIncome: lastReducer?.monthlyIncome || editLeadDataAgainstId.monthlyIncome,
    assignedTo: lastReducer?.assignedTo || editLeadDataAgainstId.assignedTo,
    assignedToName: lastReducer?.assignedToName || editLeadDataAgainstId.assignedToName,
    organisationName: lastReducer?.organisationName || editLeadDataAgainstId.organisationName,
    leadDate: editLeadDataAgainstId.leadDate || new Date().toISOString(),
    isActive: true,
    serviceDetails: updateServices?.length > 0
      ? updateServices.map(service => ({
          id: service.id || 0, 
          customerId: editLeadDataAgainstId.customerId || 0,  
          serviceId: service.serviceId || editLeadDataAgainstId.serviceId,
          serviceName: service.serviceName || editLeadDataAgainstId.serviceName,
          isExistingClient: true, 
          remark: service.remark || editLeadDataAgainstId.remark, 
          assignedTo: lastReducer?.assignedTo || editLeadDataAgainstId.assignedTo,
          assignedToName: lastReducer?.assignedToName || editLeadDataAgainstId.assignedToName,
          isActive: true
        }))
      : editLeadDataAgainstId.serviceDetails || [
        {
          id: service.id || 0, 
          customerId: editLeadDataAgainstId.customerId || 0,  
          serviceId: service.serviceId || editLeadDataAgainstId.serviceId,
          serviceName: service.serviceName || editLeadDataAgainstId.serviceName,
          isExistingClient: true, 
          remark: service.remark || editLeadDataAgainstId.remark, 
          assignedTo: lastReducer?.assignedTo || editLeadDataAgainstId.assignedTo,
          assignedToName: lastReducer?.assignedToName || editLeadDataAgainstId.assignedToName,
          isActive: true
        }
      ]
  };

  console.log("📡 Sending updated lead data:", JSON.stringify(leadData));

  try {
    const response = await leadAPISubmit(leadData, user);
    console.log("✅ Lead Updated Successfully:", response);

    if (response.success) {
      dispatch({
        type: SUBMIT_SUCCESS_LEAD,
        payload: {
          ...state.editLeadReducer, // Preserve existing data
          ...leadData, // Merge new data
          message: response.message
        }
      });
      
    } else {
      console.error("⚠️ Lead Update Failed:", response.message);
      dispatch({ type: SUBMIT_FAILURE_LEAD, error: response.message });
    }
  } catch (error) {
    console.error("❌ Lead Update API Call Failed:", error);
    dispatch({ type: SUBMIT_FAILURE, error: error.message });
  }
};


export const resetStateLeadID = () => ({type: RESET_ALL_STATE,});
