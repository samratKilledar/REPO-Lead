import { FETCH_DATA_SUCCESS } from '../actions/closeAccountAction'; // Replace with the actual file name

const initialState = {
    taskPlaceHolder: {
        isAuthenticated: false,
        taskName: "Task Name ",
        assignedTo: "Task owner",
        priority: "Priority",
        taskStatus: "Lead Status",
        dueDate: "Due Date",
        serviceRequest: "Service Request",
        startDate: "Start Date",
        reminderDate: "Reminder Date",
        remarks: "Remarks"
    },
    taskValue: {
        isAuthenticated: false,
        taskName: "Close Account",
        assignedTo: "John Smith",
        priority: "Medium",
        taskStatus: "Under Process",
        dueDate: "Feb 14, 2025",
        serviceRequest: "Account close once redemption amt credited to his account.",
        startDate: "Feb 21, 2025",
        reminderDate: "Feb 15, 2025",
        remarks: "Query raised- 11310957"
    },
};

const closeAccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                taskValue: action.payload,
            };
        default:
            return state;
    }
};

export default closeAccountReducer;
