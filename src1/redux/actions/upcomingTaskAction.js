import {UpcomingTask} from '../../api/mainApi';
// Action Types
export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';

// Action Creators
export const fetchTasksRequest = () => ({
  type: FETCH_TASKS_REQUEST,
});

export const fetchTasksSuccess = (tasks) => ({
  type: FETCH_TASKS_SUCCESS,
  payload: tasks,
});

export const fetchTasksFailure = (error) => ({
  type: FETCH_TASKS_FAILURE,
  payload: error,
});


export const fetchUpcomingTasks = () => {
  return async (dispatch) => {
    dispatch(fetchTasksRequest()); // Dispatch request action

    try {
      console.log("Fetching upcoming tasks...");
      const data = await UpcomingTask(); // API call

      console.log("Fetched tasks:", data);
      dispatch(fetchTasksSuccess(data)); // Dispatch success action
    } catch (error) {
      console.error("Error fetching tasks:", error.message);
      dispatch(fetchTasksFailure(error.message)); // Dispatch failure action
    }
  };
}