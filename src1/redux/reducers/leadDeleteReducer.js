const initialState = {
    leads: [], // Assuming leads are stored in state
    error: null,
  };
  
  export const leadReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_LEAD_SUCCESS:
        return {
          ...state,
          leads: state.leads.filter((lead) => lead.id !== action.payload), // Remove deleted lead
        };
  
      case DELETE_LEAD_FAILURE:
        return { ...state, error: action.payload };
  
      default:
        return state;
    }
  };
  