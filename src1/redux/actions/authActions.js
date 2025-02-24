
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const CHANGE_USER_CREDENTIAL = 'CHANGE_USER_CREDENTIAL';

export const loginUser = () => {
  return async (dispatch, getState) => {
    const { loginValue } = getState().auth; // Get loginValue from Redux
    console.log(loginValue.email+"=="+loginValue.password)
    try {
      const response = await fetch('https://opticalerp.in:85/api/tokens/gettoken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'tenant' : loginValue.customerId
        },
        body: JSON.stringify({
          email: loginValue.email,
          Password: loginValue.password, 
      }), 
      });

      const data = await response.json();
      alert(JSON.stringify(data))
      if (response.ok) {
       // dispatch({ type: LOGIN_SUCCESS, payload: data }); // Dispatch success action
      } else {
        throw new Error(data.message || 'Login failed!');
      }
    } catch (error) {
      alert(error.message);
    }
  };
};


export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const logout = () => ({
  type: LOGOUT,
});

export const updateCredential =(data)=>({
  type:CHANGE_USER_CREDENTIAL,
  payload:data
})
  