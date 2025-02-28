import {
  FETCH_DROPDOWN_SUCCESS,
  FETCH_DROPDOWN_FAILURE,
} from '../actions/HomeAction';

const initialState = {
  isLoading: true,
  followUp: ['No Data Avialable'],
  clientFollowUp: ['No Data Avialable'],
  taskPriority: ['No Data Avialable'],
  service: ['No Data Avialable'],
  leadSource: ['No Data Avialable'],
  country: ['No Data Avialable'],
  city: ['No Data Avialable'],
  state: ['No Data Avialable'],
  occupation: ['No Data Avialable'],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DROPDOWN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        followUp: action.payload.followUp,
        clientFollowUp: action.payload.clientFollowUp,
        taskPriority: action.payload.taskPriority,
        service: action.payload.service,
        leadSource: action.payload.leadSource,
        country: action.payload.country,
        city: action.payload.city,
        state: action.payload.state,
        occupation: action.payload.occupation,
      };

    case FETCH_DROPDOWN_FAILURE:
      return {
        ...state,
        isLoading: false,
        followUp: ['No Data Avialable'],
        clientFollowUp: ['No Data Avialable'],
        taskPriority: ['No Data Avialable'],
        service: ['No Data Avialable'],
        leadSource: ['No Data Avialable'],
        country: ['No Data Avialable'],
        city: ['No Data Avialable'],
        state: ['No Data Avialable'],
        occupation: ['No Data Avialable'],
      };

    default:
      return state;
  }
};

export default homeReducer;
