import { submitPasswordApiCall,verifyUserApiCall } from "../../api/authApi";

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

// export const submitPassword = () => async (dispatch, getState) => {
//     try {
//         const { newPassword, confirmNewPassword } = getState().createPass; // Corrected state reference

//         dispatch({ type: "PASSWORD_SUBMIT_REQUEST" });

//         const response = await submitPasswordApiCall(newPassword, confirmNewPassword);

//         if (response.success) {
//             dispatch({ type: "PASSWORD_SUBMIT_SUCCESS" });
//             dispatch(setAuthenticated(true)); // Ensure user is authenticated after successful reset
//         } else {
//             dispatch({ type: "PASSWORD_SUBMIT_FAILURE", payload: response.message });
//         }
//     } catch (error) {
//         dispatch({ type: "PASSWORD_SUBMIT_FAILURE", payload: error.message });
//     }
// };
export const submitPassword = () => async (dispatch, getState) => {
    try {
        const { newPassword, confirmNewPassword } = getState().createPass;
        //const { password, email, token } = getState().auth; // Assuming email and token are stored in auth state

        // Step 1: Verify User
        //dispatch({ type: USER_VERIFICATION_REQUEST });
        const password = "Admin@123";
        const email = "Supra@admin.com";
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJzdXByYUBhZG1pbi5jb20iLCJmdWxsTmFtZSI6InJvb3QgU3VwZXJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJyb290IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3VybmFtZSI6IlN1cGVyQWRtaW4iLCJpcEFkZHJlc3MiOiIxNTIuNTguMTUuODQiLCJ0ZW5hbnQiOiJyb290IiwiaW1hZ2VfdXJsIjoiIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbW9iaWxlcGhvbmUiOiIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJTdXBlckFkbWluIiwiZXhwIjoxNzQxOTM0OTAwfQ.APZRDX-aQX_dud-AUZXb1ssiBxsF4rDeAYx60I5xc6M";
        const verifyResponse = await verifyUserApiCall(password,email, token);
        console.log(verifyResponse);
        
        if (!verifyResponse.success) {
            dispatch({ type: USER_VERIFICATION_FAILURE, payload: verifyResponse.message });
            return;
        }

        dispatch({ type: USER_VERIFICATION_SUCCESS });

        // Step 2: Reset Password
        dispatch({ type: PASSWORD_SUBMIT_REQUEST });

        const resetResponse = await submitPasswordApiCall(newPassword, confirmNewPassword);

        if (resetResponse.success) {
            dispatch({ type: PASSWORD_SUBMIT_SUCCESS });
            dispatch(setAuthenticated(true)); 
        } else {
            dispatch({ type: PASSWORD_SUBMIT_FAILURE, payload: resetResponse.message });
        }
    } catch (error) {
        dispatch({ type: PASSWORD_SUBMIT_FAILURE, payload: error.message });
    }
};

// import { submitPasswordApiCall, verifyUserApiCall } from "../../api/authApi";

// export const SET_AUTHENTICATED = "SET_AUTHENTICATED";
// export const SET_NEW_PASSWORD_PLACEHOLDER = "SET_NEW_PASSWORD_PLACEHOLDER";
// export const SET_CONFIRM_NEW_PASSWORD_PLACEHOLDER = "SET_CONFIRM_NEW_PASSWORD_PLACEHOLDER";
// export const SET_NEW_PASSWORD = "SET_NEW_PASSWORD";
// export const SET_CONFIRM_NEW_PASSWORD = "SET_CONFIRM_NEW_PASSWORD";

// export const PASSWORD_SUBMIT_REQUEST = "PASSWORD_SUBMIT_REQUEST";
// export const PASSWORD_SUBMIT_SUCCESS = "PASSWORD_SUBMIT_SUCCESS";
// export const PASSWORD_SUBMIT_FAILURE = "PASSWORD_SUBMIT_FAILURE";
// export const USER_VERIFICATION_REQUEST = "USER_VERIFICATION_REQUEST";
// export const USER_VERIFICATION_SUCCESS = "USER_VERIFICATION_SUCCESS";
// export const USER_VERIFICATION_FAILURE = "USER_VERIFICATION_FAILURE";

// export const setAuthenticated = (isAuthenticated) => ({
//     type: SET_AUTHENTICATED,
//     payload: isAuthenticated,
// });

// export const submitPassword = () => async (dispatch, getState) => {
//     try {
//         const { newPassword, confirmNewPassword } = getState().createPass;
//         const { password, email, token } = getState().auth; // Assuming email and token are stored in auth state

//         // Step 1: Verify User
//         //dispatch({ type: USER_VERIFICATION_REQUEST });

//         const verifyResponse = await verifyUserApiCall(password,email, token);
//         console.log(verifyResponse);
        
//         if (!verifyResponse.success) {
//             dispatch({ type: USER_VERIFICATION_FAILURE, payload: verifyResponse.message });
//             return;
//         }

//         dispatch({ type: USER_VERIFICATION_SUCCESS });

//         // Step 2: Reset Password
//         dispatch({ type: PASSWORD_SUBMIT_REQUEST });

//         const resetResponse = await submitPasswordApiCall(newPassword, confirmNewPassword);

//         if (resetResponse.success) {
//             dispatch({ type: PASSWORD_SUBMIT_SUCCESS });
//             dispatch(setAuthenticated(true)); 
//         } else {
//             dispatch({ type: PASSWORD_SUBMIT_FAILURE, payload: resetResponse.message });
//         }
//     } catch (error) {
//         dispatch({ type: PASSWORD_SUBMIT_FAILURE, payload: error.message });
//     }
// };
