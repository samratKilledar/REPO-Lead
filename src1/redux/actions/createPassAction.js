export const SET_AUTHENTICATED = "SET_AUTHENTICATED";
export const SET_NEW_PASSWORD_PLACEHOLDER = "SET_NEW_PASSWORD_PLACEHOLDER";
export const SET_CONFIRM_NEW_PASSWORD_PLACEHOLDER = "SET_CONFIRM_NEW_PASSWORD_PLACEHOLDER";
export const SET_NEW_PASSWORD = "SET_NEW_PASSWORD";
export const SET_CONFIRM_NEW_PASSWORD = "SET_CONFIRM_NEW_PASSWORD";

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
