import { submitPasswordApiCall } from "../../api/authApi";

export const SET_AUTHENTICATED = "SET_AUTHENTICATED";
export const SET_NEW_PASSWORD_PLACEHOLDER = "SET_NEW_PASSWORD_PLACEHOLDER";
export const SET_CONFIRM_NEW_PASSWORD_PLACEHOLDER = "SET_CONFIRM_NEW_PASSWORD_PLACEHOLDER";
export const SET_NEW_PASSWORD = "SET_NEW_PASSWORD";
export const SET_CONFIRM_NEW_PASSWORD = "SET_CONFIRM_NEW_PASSWORD";

export const PASSWORD_SUBMIT_REQUEST = "PASSWORD_SUBMIT_REQUEST";
export const PASSWORD_SUBMIT_SUCCESS = "PASSWORD_SUBMIT_SUCCESS";
export const PASSWORD_SUBMIT_FAILURE = "PASSWORD_SUBMIT_FAILURE";

export const setAuthenticated = (isAuthenticated) => ({
    type: SET_AUTHENTICATED,
    payload: isAuthenticated,
});

export const setNewPasswordPlaceholder = (placeholder) => ({
    type: SET_NEW_PASSWORD_PLACEHOLDER,
    payload: placeholder,
});

export const setConfirmNewPasswordPlaceholder = (placeholder) => ({
    type: SET_CONFIRM_NEW_PASSWORD_PLACEHOLDER,
    payload: placeholder,
});

export const setNewPassword = (password) => ({
    type: SET_NEW_PASSWORD,
    payload: password,
});

export const setConfirmNewPassword = (password) => ({
    type: SET_CONFIRM_NEW_PASSWORD,
    payload: password,
});

export const submitPassword = () => async (dispatch, getState) => {
    try {
        const { newPassword, confirmNewPassword } = getState().createPass; // Corrected state reference

        dispatch({ type: "PASSWORD_SUBMIT_REQUEST" });

        const response = await submitPasswordApiCall(newPassword, confirmNewPassword);

        if (response.success) {
            dispatch({ type: "PASSWORD_SUBMIT_SUCCESS" });
            dispatch(setAuthenticated(true)); // Ensure user is authenticated after successful reset
        } else {
            dispatch({ type: "PASSWORD_SUBMIT_FAILURE", payload: response.message });
        }
    } catch (error) {
        dispatch({ type: "PASSWORD_SUBMIT_FAILURE", payload: error.message });
    }
};

