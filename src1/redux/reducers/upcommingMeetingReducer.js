import { SET_MEETINGS, ADD_MEETING } from "../actions/meetingActions";

const initialState = {
  meetings: [],
};

const meetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEETINGS:
      return {
        ...state,
        meetings: action.payload,
      };
    case ADD_MEETING:
      return {
        ...state,
        meetings: [...state.meetings, action.payload],
      };
    default:
      return state;
  }
};

export default meetingReducer;
