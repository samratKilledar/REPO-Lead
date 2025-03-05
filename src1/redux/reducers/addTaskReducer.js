import {
    SUBMIT_SUCCESS,
    SUBMIT_FAILURE,
    SUBMIT_TASK,
    CHANGE_TASK_NAME,
    CHANGE_TASK_TYPE,
    CHANGE_ASSIGNED_TO,
    CHANGE_CLIENT_NAME,
    CHANGE_DUE_DATE,
    CHANGE_PRIORITY,
    CHANGE_SERVICE_REQUEST,
    CHANGE_START_DATE,
    CHANGE_REMINDER_DATE,
    CHANGE_ATTACHMENT_NAME,
    CHANGE_REMARKS,
    SET_TASK_TYPE_OPTIONS,
    SET_ASSIGNED_TO_OPTIONS,
    SET_CLIENT_NAME_OPTIONS,
    SET_PRIORITY_OPTIONS
} from "../actions/addTaskAction";

const initialState = {
    isAuthenticated: false,

    // Placeholder text for each field
    taskNamePlaceholder: "Title",
    taskTypePlaceholder: "Type",
    assignedToPlaceholder: "Task Assigned To",
    clientNamePlaceholder: "Client",
    dueDatePlaceholder: "Due Date",
    priorityPlaceholder: "Priority",
    serviceRequestPlaceholder: "Service Request",
    startDatePlaceholder: "Start Date",
    reminderDatePlaceholder: "Reminder Date",
    attachmentNamePlaceholder: "Attachment",
    remarksPlaceholder: "Remark",

    taskName: "",
    taskType: "",
    assignedTo: "",
    clientName: "",
    dueDate: "",
    priority: "",
    serviceRequest: "",
    startDate: "",
    reminderDate: "",
    attachmentName: "",
    remarks: "",

    // Separate dropdown lists for each field
    typeOptions: ["Sanika", "Pranjali"],
    assignOptions: [],
    clientOptions: [],
    priorityOptions: [],

};

const addTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT_SUCCESS':
            return { ...state, isAuthenticated: true };

        case CHANGE_TASK_NAME:
            return { ...state, taskName: action.payload };

        case CHANGE_TASK_TYPE:
            return { ...state, taskType: action.payload };

        case CHANGE_ASSIGNED_TO:
            return { ...state, assignedTo: action.payload };

        case CHANGE_CLIENT_NAME:
            return { ...state, clientName: action.payload };

        case CHANGE_DUE_DATE:
            return { ...state, dueDate: action.payload };

        case CHANGE_PRIORITY:
            return { ...state, priority: action.payload };

        case CHANGE_SERVICE_REQUEST:
            return { ...state, serviceRequest: action.payload };

        case CHANGE_START_DATE:
            return { ...state, startDate: action.payload };

        case CHANGE_REMINDER_DATE:
            return { ...state, reminderDate: action.payload };

        case CHANGE_ATTACHMENT_NAME:
            return { ...state, attachmentName: action.payload };

        case CHANGE_REMARKS:
            return { ...state, remarks: action.payload };

        case SET_TASK_TYPE_OPTIONS:
            return { ...state, typeOptions: action.payload };

        case SET_ASSIGNED_TO_OPTIONS:
            return { ...state, assignOptions: action.payload };

        case SET_CLIENT_NAME_OPTIONS:
            return { ...state, clientOptions: action.payload };

        case SET_PRIORITY_OPTIONS:
            return { ...state, priorityOptions: action.payload };

        default:
            return state;
    }
};

export default addTaskReducer;