// export const EMAIL_SUCCESS = 'EMAIL_SUCCESS';
// export const CHANGE_EMAIL_CREDENTIAL = 'CHANGE_EMAIL_CREDENTIAL';

// export const forgotPassUser = () => {
//   return async (dispatch, getState) => {
//     const { emailValue } = getState().forgotPassReducer; // Get loginValue from Redux
//     console.log(emailValue.email)
//     try {
//       const response = await fetch('https://opticalerp.in:85/api/users/forgotpassword/forgot-password', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'tenant' : emailValue.email
//         },
//         body: JSON.stringify({
//           email: emailValue.email,
//       }), 
//       });

//       const data = await response.json();
//       alert(JSON.stringify(data))
//       if (response.ok) {
//        // dispatch({ type: LOGIN_SUCCESS, payload: data }); // Dispatch success action
//       } else {
//         throw new Error(data.message || 'Invalid Email !');
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };
// };


// export const emailSuccess = () => ({
//   type: EMAIL_SUCCESS,
// });

// export const updateForgotPassEmail =(data)=>({
//   type:CHANGE_EMAIL_CREDENTIAL,
//   payload:data
// })

import { forgotPassApiCall } from '../../api/authApi';

export const EMAIL_SUCCESS = 'EMAIL_SUCCESS';
export const EMAIL_FAILURE = 'EMAIL_FAILURE';
export const CHANGE_EMAIL_CREDENTIAL = 'CHANGE_EMAIL_CREDENTIAL';
export const EMAIL_CLICK = 'EMAIL_CLICK';

// ✅ Forgot Password Action
export const forgotPassUser = () => async (dispatch, getState) => {
  try {
      const { emailValue } = getState().forgotPassReducer; // Get email from Redux
      dispatch({ type: EMAIL_CLICK });

      console.log('Calling forgotPassApiCall with:', emailValue.email);

      const data = await forgotPassApiCall({ email: emailValue.email }); // Call API

      if (data.success) {
          dispatch({ type: EMAIL_SUCCESS, payload: data });
          return { success: true, message: data.message }; // ✅ Return success response
      } else {
          dispatch({ type: EMAIL_FAILURE, payload: data.message || 'Invalid Email!' });
          return { success: false, message: data.message || 'Invalid Email!' }; // ✅ Return failure response
      }
  } catch (error) {
      dispatch({ type: EMAIL_FAILURE, payload: error.message });
      return { success: false, message: error.message || 'An error occurred!' }; // ✅ Return error response
  }
};


// ✅ Email Success Action
export const emailSuccess = (userData) => ({
  type: EMAIL_SUCCESS,
  payload: userData,
});

// ✅ Update Email Credentials Action
export const updateForgotPassEmail = (data) => ({
  type: CHANGE_EMAIL_CREDENTIAL,
  payload: data,
});
