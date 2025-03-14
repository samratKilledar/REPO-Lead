import { leadAPISubmit } from "../../api/mainApi";

export const SUBMIT_SUCCESS = "SUBMIT_SUCCESS";
export const SUBMIT_FAILURE = "SUBMIT_FAILURE";

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

export const updateFirstName = (firstName) => ({
  type: UPDATE_FIRSTNAME,
  payload: firstName,
});

export const updateLastName = (lastName) => ({
  type: UPDATE_LASTNAME,
  payload: lastName,
});

export const updateLeadSources = (leadSources) => ({
  type: UPDATE_LEADSOURCES,
  payload: leadSources,
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

export const updateCity = (city) => ({
  type: UPDATE_CITY,
  payload: city,
});

export const updateState = (state) => ({
  type: UPDATE_STATE,
  payload: state,
});

export const updateCountry = (country) => ({
  type: UPDATE_COUNTRY,
  payload: country,
});

export const updatePincode = (pincode) => ({
  type: UPDATE_PINCODE,
  payload: pincode,
});

export const updateOccupation = (occupation) => ({
  type: UPDATE_OCCUPATION,
  payload: occupation,
});

export const updateTypeOfWork = (typeOfWork) => ({
  type: UPDATE_TYPEOFWORK,
  payload: typeOfWork,
});

export const updateMonthlyIncome = (monthlyIncome) => ({
  type: UPDATE_MONTHLYINCOME,
  payload: monthlyIncome,
});

export const updateAssignTo = (assignTo) => ({
  type: UPDATE_ASSIGNTO,
  payload: assignTo,
});

export const updateServices = (services) => ({
  type: UPDATE_SERVICES,
  payload: services,
});

export const updateRemark = (remark) => ({
  type: UPDATE_REMARK,
  payload: remark,
});

export const leadSubmitAllData= () => async (dispatch, getState) => {
  try {

    const alldata= getState().lastReducer; 
    const tenantId=getState().auth;
    alert(JSON.stringify(alldata)+"---"+tenantId.loginValue.customerId)
   // dispatch({type: SUBMIT_ALL_LEAD_DATA});
   
     const data = await leadAPISubmit(alldata,tenantId.customerId);
    // if (data.token != null) {
    //   //alert(JSON.stringify(data));
    //   setItem('authToken', data.token); 
    //   dispatch({type: LOGIN_SUCCESS}); 
    // } else {
    //   dispatch({type: LOGIN_FAILURE, payload: error.message}); 
    // }
  } catch (error) {
    dispatch({type: LOGIN_FAILURE, payload: error.message}); 
  }
}



export const submitSuccess = () => ({ type: SUBMIT_SUCCESS });

export const submitFailure = (error) => ({
  type: SUBMIT_FAILURE,
  payload: error,
});










// export const submitLeadLast = () => async (dispatch, getState) => {
//   console.log("🎯 Inside Submit Action");

//   try {
//     const { remark, assignto, services } = getState().lastReducer;

//     const data = { remark, assignto, services };
//     console.log("📤 Submitting Lead Data:", JSON.stringify(data));

//     const response = await leadLastApiCall(data);

//     if (response.success) {
//       console.log("✅ Lead Submitted Successfully:", response.data);
//       dispatch({ type: SUBMIT_SUCCESS });
//     } else {
//       console.log("❌ Submission Failed:", response.message);
//       dispatch({ type: SUBMIT_FAILURE, payload: response.message });
//     }
//   } catch (error) {
//     console.log("🚨 Submission Error:", error.message);
//     dispatch({ type: SUBMIT_FAILURE, payload: error.message });
//   }
// };