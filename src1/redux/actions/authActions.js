export const loginUser = (userData) => {
    return (dispatch) => {
      // Simulate an API call
      setTimeout(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      }, 1000);
    };
  };

  // ../redux/actions/authActions.js

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const logout = () => ({
  type: LOGOUT,
});

  