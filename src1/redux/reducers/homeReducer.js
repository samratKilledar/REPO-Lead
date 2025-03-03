import UpcomingMeetings from '../../screens/Main/UpcomingMeetings';
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
  getAllLeadApi:['No Data Avialable'],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_DROPDOWN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        followUp: action.payload.followUpRes,
        clientFollowUp: action.payload.clientFollowUpRes,
        taskPriority: action.payload.taskPriority,
        service: action.payload.service,
        leadSource: action.payload.leadSourceRes,
        country: action.payload.countryRes,
        city: action.payload.cityRes,
        state: action.payload.stateRes,
        occupation: action.payload.occupationRes,
        getAllLeadApi:action.payload.getAllLeadApiRes
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
        getAllLeadApi:['No Data Avialable'],
      };

    default:
      return state;
  }
};

export default homeReducer;
