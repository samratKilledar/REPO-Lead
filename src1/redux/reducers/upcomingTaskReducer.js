import { FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE } from '../actions/upcomingTaskAction';

const initialState = {
  loading: false,
  tasks: [],
  error: '',
};

const upcomingTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS_REQUEST:
      return { 
        ...state, 
        loading: true 
      };
      
    case FETCH_TASKS_SUCCESS:
      return { 
        loading: false, 
        tasks: action.payload, 
        error: '' 
      };

    case FETCH_TASKS_FAILURE:
      return { 
        loading: false, 
        tasks: [], 
        error: action.payload 
      };

    default:
      return state;
  }
};

export default upcomingTaskReducer;
