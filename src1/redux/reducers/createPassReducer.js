import { 
    SET_NEW_PASSWORD, 
    SET_CONFIRM_NEW_PASSWORD, 
    SET_AUTHENTICATED, 
    SET_NEW_PASSWORD_PLACEHOLDER, 
    SET_CONFIRM_NEW_PASSWORD_PLACEHOLDER 
} from "../../redux/actions/createPassAction";

const initialState = {
    isAuthenticated: false,
    newPasswordPlaceholder: "Password",
    confirmNewPasswordPlaceholder: "Confirm Password",
    newPassword: "",
    confirmNewPassword: "",
};

const createPassReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_PASSWORD:
            return { ...state, newPassword: action.payload };

        case SET_CONFIRM_NEW_PASSWORD:
            return { ...state, confirmNewPassword: action.payload };

        case SET_AUTHENTICATED:
            return { ...state, isAuthenticated: action.payload };

        case SET_NEW_PASSWORD_PLACEHOLDER:
            return { ...state, newPasswordPlaceholder: action.payload };

        case SET_CONFIRM_NEW_PASSWORD_PLACEHOLDER:
            return { ...state, confirmNewPasswordPlaceholder: action.payload };

        default:
            return state;
    }
};

export default createPassReducer;
