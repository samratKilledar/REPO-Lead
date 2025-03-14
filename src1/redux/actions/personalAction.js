export const PERSONAL_SUBMIT_SUCCESS = 'PERSONAL_SUBMIT_SUCCESS';
export const CHANGE_PERSONAL_FIELD = 'CHANGE_PERSONAL_FIELD';
export const CHANGE_FIRST_NAME = "CHANGE_FIRST_NAME";
export const CHANGE_LAST_NAME = "CHANGE_LAST_NAME";
export const CHANGE_EMAIL_ID = "CHANGE_EMAIL_ID";
export const CHANGE_MOBILENO = "CHANGE_MOBILENO";
export const CHANGE_WHATSAPPNO = "CHANGE_WHATSAPPNO";
export const CHANGE_ADDRESS_LINE1 = "CHANGE_ADDRESSLINE1";
export const CHANGE_ADDRESS_LINE2 = "CHANGE_ADDRESSLINE2";
export const CHANGE_PINCODE = "CHANGE_PINCODE";
export const CHANGE_LEAD_SOURCE = "CHANGE_LEAD_SOURCE";
export const CHANGE_CITY_OPTION = "CHANGE_CITY_OPTION";
export const CHANGE_STATE_OPTION = "CHANGE_STATE_OPTION";
export const CHANGE_COUNTRY_OPTION = "CHANGE_COUNTRY_OPTION";


export const submitPersonalDetails = () => {
  // return async (dispatch, getState) => {
  //   const { personalValue } = getState().personalReducer;
  //   // console.log(personalValue);
  //   try {
  //     const response = await fetch('https://opticalerp.in:85/api/lead/create/create', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'tenant': personalValue.email,
  //       },
  //       body: JSON.stringify({
  //         firstName: personalValue.firstName,
  //         lastName: personalValue.lastName,

  //         emailId: personalValue.emailId,
  //         Mobileno: personalValue.Mobileno,
  //         WhatsappNo: personalValue.WhatsappNo,
  //         addressLine1: personalValue.addressLine1,
  //         addressLine2: personalValue.addressLine2,
  //       }),
  //     });

  //     const data = await response.json();
  //     alert(JSON.stringify(data));

  //     if (response.ok) {
  //       dispatch({ type: PERSONAL_SUBMIT_SUCCESS, payload: data });
  //     } else {
  //       throw new Error(data.message || 'Failed to submit personal details!');
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };
};

export const personalSubmitSuccess = () => ({
  type: PERSONAL_SUBMIT_SUCCESS,
});

export const updatePersonalField = (data) => ({
  type: CHANGE_PERSONAL_FIELD,
  payload: data,
});

export const updatefirstName = (firstName) => ({
  type: CHANGE_FIRST_NAME,
  payload: firstName,
});

export const updatelastName = (lastName) => ({
  type: CHANGE_LAST_NAME,
  payload: lastName,
});




export const updateemailId = (data) => ({
  type: CHANGE_EMAIL_ID,
  payload: emailId,
});

export const updateMobileno = (mobileNo) => ({
  type: CHANGE_MOBILENO,
  payload: mobileNo,
});

export const updatewhatsappNo = (whatsAppNo) => ({
  type: CHANGE_WHATSAPPNO,
  payload: whatsAppNo,
});

export const updateAddressLine1 = (addressLine1) => ({
  type: CHANGE_ADDRESS_LINE1,
  payload: addressLine1,
});

export const updateAddressLine2 = (addressLine2) => ({
  type: CHANGE_ADDRESS_LINE2,
  payload: addressLine2,
});

export const updatePincode = (pincode) => ({
  type: CHANGE_PINCODE,
  payload: pincode,
});

export const updateleadSource = (leadSourceName) => ({
  type: CHANGE_LEAD_SOURCE,
  payload: leadSourceName,
});

export const updateCity = (cityOption) => ({
  type: CHANGE_CITY_OPTION,
  payload: cityOption,
});

export const updateState = (stateOption) => ({
  type: CHANGE_STATE_OPTION,
  payload: stateOption,
});

export const updateCountry = (countryOption) => ({
  type: CHANGE_COUNTRY_OPTION,
  payload: countryOption
});
