import {addTaskApiCall, readAllLead} from '../../api/mainApi';
import {setItem, getItem} from '../../api/storageServices';

export const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';
export const SUBMIT_FAILURE = 'SUBMIT_FAILURE';
export const SUBMIT_TASK = 'SUBMIT_TASK';
export const CHANGE_TASK_NAME = 'CHANGE_TASK_NAME';
export const CHANGE_TASK_TYPE = 'CHANGE_TASK_TYPE';
export const CHANGE_ASSIGNED_TO = 'CHANGE_ASSIGNED_TO';
export const CHANGE_CLIENT_NAME = 'CHANGE_CLIENT_NAME';
export const CHANGE_DUE_DATE = 'CHANGE_DUE_DATE';
export const CHANGE_PRIORITY = 'CHANGE_PRIORITY';
export const CHANGE_SERVICE_REQUEST = 'CHANGE_SERVICE_REQUEST';
export const CHANGE_START_DATE = 'CHANGE_START_DATE';
export const CHANGE_REMINDER_DATE = 'CHANGE_REMINDER_DATE';
export const CHANGE_ATTACHMENT_NAME = 'CHANGE_ATTACHMENT_NAME';
export const CHANGE_REMARKS = 'CHANGE_REMARKS';
export const SET_TASK_TYPE_OPTIONS = 'SET_TASK_TYPE_OPTIONS';
export const SET_ASSIGNED_TO_OPTIONS = 'SET_ASSIGNED_TO_OPTIONS';
export const SET_CLIENT_NAME_OPTIONS = 'SET_CLIENT_NAME_OPTIONS';
export const SET_PRIORITY_OPTIONS = 'SET_PRIORITY_OPTIONS';
export const SET_SERVICE_REQUEST_OPTIONS = 'SET_SERVICE_REQUEST_OPTIONS';

export const submitSuccess = () => ({ type: SUBMIT_SUCCESS });
export const changeTaskName = (taskName) => ({ type: CHANGE_TASK_NAME, payload: taskName });
export const changeTaskType = (taskType) => ({ type: CHANGE_TASK_TYPE, payload: taskType });
export const changeAssignedTo = (assignedTo) => ({ type: CHANGE_ASSIGNED_TO, payload: assignedTo });
export const changeClientName = (clientName) => ({ type: CHANGE_CLIENT_NAME, payload: clientName });
export const changeDueDate = (dueDate) => ({ type: CHANGE_DUE_DATE, payload: dueDate });
export const changePriority = (priority) => ({ type: CHANGE_PRIORITY, payload: priority });
export const changeServiceRequest = (serviceRequest) => ({ type: CHANGE_SERVICE_REQUEST, payload: serviceRequest });
export const changeStartDate = (startDate) => ({ type: CHANGE_START_DATE, payload: startDate });
export const changeReminderDate = (reminderDate) => ({ type: CHANGE_REMINDER_DATE, payload: reminderDate });
export const changeAttachmentName = (attachmentName) => ({ type: CHANGE_ATTACHMENT_NAME, payload: attachmentName });
export const changeRemarks = (remarks) => ({ type: CHANGE_REMARKS, payload: remarks });
export const setTaskTypeOptions = (options) => ({ type: SET_TASK_TYPE_OPTIONS, payload: options });
export const setAssignedToOptions = (options) => ({ type: SET_ASSIGNED_TO_OPTIONS, payload: options });
export const setClientNameOptions = (options) => ({ type: SET_CLIENT_NAME_OPTIONS, payload: options });
export const setPriorityOptions = (options) => ({ type: SET_PRIORITY_OPTIONS, payload: options });
export const setServiceRequestOptions = (options) => ({ type: SET_SERVICE_REQUEST_OPTIONS, payload: options });


export const submitTask = () => async (dispatch, getState) => {
    try {
      const taskData = getState().addTask; // Get task data from Redux
      dispatch({ type: SUBMIT_TASK });
  
      const response = await addTaskApiCall(taskData); // API call
      if (response.success) {
        dispatch({ type: SUBMIT_SUCCESS }); // Dispatch success action
      } else {
        dispatch({ type: SUBMIT_FAILURE, payload: response.message }); // Dispatch failure action
      }
    } catch (error) {
      dispatch({ type: SUBMIT_FAILURE, payload: error.message }); // Dispatch failure action
    }
};
