export const loginUser = (userData) => {
    return (dispatch) => {
      // Simulate an API call
      setTimeout(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      }, 1000);
    };
  };
  