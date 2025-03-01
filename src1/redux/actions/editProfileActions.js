import { 
    UPDATE_FIRSTNAME, 
    UPDATE_LASTNAME, 
    UPDATE_EMAIL, 
    UPDATE_PHONENUMBER, 
    UPDATE_GENDER ,
    UPDATE_DATE
} from "../reducers/editProfileReducer";



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