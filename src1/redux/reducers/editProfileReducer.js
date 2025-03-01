const initialState = {
    isUpdating: false,
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    gender: [],
    date: "",

    firstnamePlaceholder: "firstName",
    lastnamePlaceholder: "lastName",
    emailPlaceholder: "email",
    phonenumberPlaceholder: "phoneNumber",
    genderPlaceholder: ["Select Gender"],
    datePlaceholder: "Select Date",
};

// Action Types
export const UPDATE_FIRSTNAME = "UPDATE_FIRSTNAME";
export const UPDATE_LASTNAME = "UPDATE_LASTNAME";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_PHONENUMBER = "UPDATE_PHONENUMBER";
export const UPDATE_GENDER = "UPDATE_GENDER";
export const UPDATE_PROFILE_FAILURE = "UPDATE_PROFILE_FAILURE";
export const UPDATE_DATE = "UPDATE_DATE";

const editProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FIRSTNAME:
            return { ...state, firstname: action.payload };

        case UPDATE_LASTNAME:
            return { ...state, lastname: action.payload };

        case UPDATE_EMAIL:
            return { ...state, email: action.payload };

        case UPDATE_PHONENUMBER:
            return { ...state, phonenumber: action.payload };

        case UPDATE_GENDER:
            return { ...state, gender: action.payload };

        case UPDATE_DATE:
                return { ...state, date: action.payload };

        case UPDATE_PROFILE_FAILURE:
            return { ...state, updateError: action.payload };

        default:
            return state;
    }
};

export default editProfileReducer;
