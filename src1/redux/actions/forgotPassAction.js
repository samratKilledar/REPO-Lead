export const EMAIL_SUCCESS = 'EMAIL_SUCCESS';
export const CHANGE_EMAIL_CREDENTIAL = 'CHANGE_EMAIL_CREDENTIAL';

export const forgotPassUser = () => {
  return async (dispatch, getState) => {
    const { emailValue } = getState().forgotPassReducer; 
    console.log(emailValue.email)
    try {
      const response = await fetch('https://opticalerp.in:85/api/users/forgotpassword/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'tenant' : emailValue.email
        },
        body: JSON.stringify({
          email: emailValue.email,
      }), 
      });

      const data = await response.json();
      alert(JSON.stringify(data))
      if (response.ok) {
       // dispatch({ type: LOGIN_SUCCESS, payload: data }); // Dispatch success action
      } else {
        throw new Error(data.message || 'Invalid Email !');
      }
    } catch (error) {
      alert(error.message);
    }
  };
};


export const emailSuccess = () => ({
  type: EMAIL_SUCCESS,
});

export const updateForgotPassEmail =(data)=>({
  type:CHANGE_EMAIL_CREDENTIAL,
  payload:data
})

