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

// // Async Action (Thunk)
// export const fetchUpcomingTasks = () => {
//   return async (dispatch) => {
//     dispatch(fetchTasksRequest());
//     try {
//       const response = await fetch('https://api.example.com/upcoming-tasks'); // Replace with actual API URL
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       dispatch(fetchTasksSuccess(data));
//     } catch (error) {
//       dispatch(fetchTasksFailure(error.message));
//     }
//   };
// };
