import { FETCH_LEADS_REQUEST, FETCH_LEADS_SUCCESS, FETCH_LEADS_FAILURE } from "../actions/leadListAction";

const initialState = {
  leads: [],
  loading: false,
  error: null,
};

const leadReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEADS_REQUEST:
      return { ...state, loading: true };

    case FETCH_LEADS_SUCCESS:
      return { ...state, loading: false, leads: action.payload };

    case FETCH_LEADS_FAILURE:
      return { ...state, loading: false, error: action.payload };
      
    default:
      return state;
  }
};

export default leadReducer;