const initialState = {
    followUp: { statusList: [], error: null },
    clientFollowUp: { statusList: [], error: null },
  };
  
  const statusReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_STATUS_SUCCESS":
        return {
          ...state,
          [action.payload.apiType]: { statusList: action.payload.data, error: null },
        };
  
      case "FETCH_STATUS_FAILURE":
        return {
          ...state,
          [action.payload.apiType]: { ...state[action.payload.apiType], error: action.payload.error },
        };
  
      default:
        return state;
    }
  };
  
  export default statusReducer;
  