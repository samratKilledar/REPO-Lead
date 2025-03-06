const initialState = {
    isAuthenticated: false,
    emailPlaceHolder: {
      email: "Email",
    },
    emailValue: {
      email: "Supra@admin.com",
    }
  };

  const forgotPassReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EMAIL_SUCCESS':
            return { ...state, isAuthenticated: true };
  
        case 'CHANGE_EMAIL_CREDENTIAL':
            return { 
                ...state, 
                emailValue: { 
                    ...state.emailValue, 
                    ...action.payload   
                } 
            };
  
        default:
            return state;
    }
  };
  export default forgotPassReducer;
  