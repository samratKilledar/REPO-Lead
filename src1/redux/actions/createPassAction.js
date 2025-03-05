// actionTypes.js (Optional: If you want to manage action types separately)
export const SET_AUTHENTICATED = "SET_AUTHENTICATED";
export const SET_NEW_PASSWORD_PLACEHOLDER = "SET_NEW_PASSWORD_PLACEHOLDER";
export const SET_CONFIRM_NEW_PASSWORD_PLACEHOLDER = "SET_CONFIRM_NEW_PASSWORD_PLACEHOLDER";
export const SET_NEW_PASSWORD = "SET_NEW_PASSWORD";
export const SET_CONFIRM_NEW_PASSWORD = "SET_CONFIRM_NEW_PASSWORD";

// actions.js
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
        const { newPassword, confirmNewPassword } = getState().password; // Get password data from Redux

        dispatch({ type: "PASSWORD_SUBMIT_REQUEST" });

        // Simulating API call for password submission (Replace with actual API call)
        const response = await submitPasswordApiCall(newPassword, confirmNewPassword);

        if (response.success) {
            dispatch({ type: "PASSWORD_SUBMIT_SUCCESS" });
        } else {
            dispatch({ type: "PASSWORD_SUBMIT_FAILURE", payload: response.message });
        }
    } catch (error) {
        dispatch({ type: "PASSWORD_SUBMIT_FAILURE", payload: error.message });
    }
};

