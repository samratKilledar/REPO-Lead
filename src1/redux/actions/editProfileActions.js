export const UPDATE_FIRSTNAME = "UPDATE_FIRSTNAME";
export const UPDATE_LASTNAME = "UPDATE_LASTNAME";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_PHONENUMBER = "UPDATE_PHONENUMBER";
export const UPDATE_GENDER = "UPDATE_GENDER";
export const UPDATE_PROFILE_FAILURE = "UPDATE_PROFILE_FAILURE";
export const UPDATE_DATE = "UPDATE_DATE";
export const UPDATE_CLICK ="UPDATE_CLICK";
export const UPDATE_SUCCESS ="UPDATE_SUCCESS";
export const UPDATE_FAILURE = "UPDATE_FAILURE";

export const updateFirstname = (firstname) => ({
    type: UPDATE_FIRSTNAME,
    payload: firstname,
});

export const updateLastname = (lastname) => ({
    type: UPDATE_LASTNAME,
    payload: lastname,
});

export const updateEmail = (email) => ({
    type: UPDATE_EMAIL,
    payload: email,
});

export const updatePhoneNumber = (phonenumber) => ({
    type: UPDATE_PHONENUMBER,
    payload: phonenumber,
});

export const updateGender = (gender) => ({
    type: UPDATE_GENDER,
    payload: gender,
});

export const updateDate = (date) => ({
    type: UPDATE_DATE,
    payload: date,
});

export const updateSuccess = userData => ({
  type: UPDATE_SUCCESS,
  payload: userData,
});






