import { leadAPISubmit } from "../../api/mainApi";
import { getItem } from '../../api/storageServices';

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
export const RESET_ALL_STATE = "RESET_ALL_STATE";
export const SET_ALL_DATA_DEFAULT_FOR_EDIT = "SET_ALL_DATA_DEFAULT_FOR_EDIT";

export const updateFirstName = (firstName) => ({
  type: UPDATE_FIRSTNAME,
  payload: firstName,
});

export const updateLastName = (lastName) => ({
  type: UPDATE_LASTNAME,
  payload: lastName,
});

export const updateLeadSources = (leadSource) => ({
  type: UPDATE_LEADSOURCES,
  payload: leadSource,
});

export const updateOtherSource = (otherSource) => ({
  type: UPDATE_OTHER_SOURCE,
  payload: otherSource,
}); 

export const updateMobileNo = (mobileNo) => ({
  type: UPDATE_MOBILENO,
  payload: mobileNo,
});

export const updateEmailId = (emailId) => ({
  type: UPDATE_EMAILID,
  payload: emailId,
});

export const updateWhatsAppNo = (whatsAppNo) => ({
  type: UPDATE_WHATSAPPNO,
  payload: whatsAppNo,
});

export const updateAddressLine1 = (addressLine1) => ({
  type: UPDATE_ADDRESSLINE1,
  payload: addressLine1,
});

export const updateAddressLine2 = (addressLine2) => ({
  type: UPDATE_ADDRESSLINE2,
  payload: addressLine2,
});

export const updateCity = (cityId) => ({
  type: UPDATE_CITY,
  payload: cityId,
});

export const updateState = (stateId) => ({
  type: UPDATE_STATE,
  payload: stateId,
});

export const updateCountry = (countryId) => ({
  type: UPDATE_COUNTRY,
  payload: countryId,
});

export const updatePincode = (pincode) => ({
  type: UPDATE_PINCODE,
  payload: pincode,
});

export const updateOccupation = (occupation) => ({
  type: UPDATE_OCCUPATION,
  payload: occupation,
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
  payload: monthlyIncome,
});

export const updateAssignTo = (assignedTo) => ({
  type: UPDATE_ASSIGNTO,
  payload: assignedTo,
});

export const updateServices = (serviceId) => ({
  type: UPDATE_SERVICES,
  payload: serviceId,
});

export const updateRemark = (remark) => ({
  type: UPDATE_REMARK,
  payload: remark,
});

export const leadSubmitAllData = (newCard) => async (dispatch, getState) => {
  dispatch({ type: SUBMIT_REQUEST });
  const { lastReducer } = getState();
  console.log("----------"+JSON.stringify(newCard))
  const user = await getItem('tenantId');
  let newServices=newCard;
  const leadData = {
    id: 0,
    tenantId: user,
    customerId: 0,
    entity: "someEntityValue", 
    firstName: lastReducer.firstName,
    lastName: lastReducer.lastName,
    emailId: lastReducer.emailId ,
    leadSource: lastReducer.leadSource ,
    leadSourceName: lastReducer.leadSourceName,
    otherSource:lastReducer.otherSource,
    mobileNo: lastReducer.mobileNo ,
    whatsAppNo: lastReducer.whatsAppNo,
    addressLine1: lastReducer.addressLine1,
    addressLine2: lastReducer.addressLine2 ,
    cityId : lastReducer.cityId ,
    cityName : lastReducer.cityName,
    stateId : lastReducer.stateId,
    stateName : lastReducer.stateName,
    countryId : lastReducer.countryId,
    countryName : lastReducer.countryName,
    pincode: lastReducer.pincode,
    occupation: lastReducer.occupation ,
    occupationName: lastReducer.occupationName ,
    workType: lastReducer.workType ,
    monthlyIncome: lastReducer.monthlyIncome,
    assignedTo: lastReducer.assignedTo, 
    assignedToName: lastReducer.assignedToName, 
    organisationName:lastReducer.organisationName,
    leadDate: new Date().toISOString(),
    isActive: true,
    serviceDetails: newServices.length > 0
    ? newServices.map(service => ({
        id: 0, 
        customerId: 0,  
        serviceId: lastReducer.serviceId,
        serviceName: lastReducer.serviceName,
        isExistingClient: true, 
        remark: service.description, 
        assignedTo: lastReducer.assignedTo, 
       assignedToName: lastReducer.assignedToName,
        isActive: true
      }))
    : lastReducer.serviceDetails || [
        {
          id: 0,
          customerId: 0,
          serviceId: lastReducer.serviceId,
          serviceName: lastReducer.serviceName,
          isExistingClient: true,
          remark: lastReducer.remark,
          assignedTo: lastReducer.assignedTo, 
          assignedToName: lastReducer.assignedToName, 
          isActive: true
        }
      ]
  };
  console.log("📤 Submitting Lead Data:"+ JSON.stringify(leadData));


  try {
    const response = await leadAPISubmit(leadData, user);
    console.log("✅ Lead Submitted Successfully:", response);
    if(response.message == "Lead added successfully." || response.success == true){
      dispatch({ type: SUBMIT_SUCCESS_LEAD, payload: response });
    }else{
      dispatch({ type: SUBMIT_FAILURE_LEAD, error: response.message });
    }
  
  } catch (error) {
    console.error("❌ Lead Submission Failed:", error);

    dispatch({ type: SUBMIT_FAILURE, error: error.message });
  }

};

export const setAllInputFileds=(leadData,leadId)=>({
  type: SET_ALL_DATA_DEFAULT_FOR_EDIT,
  payload: leadData,
  //updateFirstName()
})


export const submitSuccess = () => ({ type: SUBMIT_SUCCESS });

export const submitFailure = (error) => ({
  type: SUBMIT_FAILURE,
  payload: error,
});


export const resetStateLead = (error) => ({
  type: RESET_ALL_STATE,

});

export const submitRequest = () => ({ type: SUBMIT_REQUEST });
