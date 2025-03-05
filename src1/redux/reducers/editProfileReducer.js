import { 
    UPDATE_FIRSTNAME, 
    UPDATE_LASTNAME, 
    UPDATE_EMAIL, 
    UPDATE_PHONENUMBER, 
    UPDATE_GENDER ,
    UPDATE_DATE,
    UPDATE_SUCCESS,
    UPDATE_FAILURE,
    UPDATE_PROFILE_FAILURE,
} from "../actions/editProfileActions";


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




const editProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SUCCESS:
            return { ...state, isUpdating: true };

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
