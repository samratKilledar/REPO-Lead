const initialState = {
    isAuthenticated: false,

    // Placeholder text for each field
    title: "Title",
    followupStatus: "Status",
    assignedTo: "Assign",
    attachmentUrl: "Attachment",
    followupDate: "Next Meeting schedule on",
    followupTime: "Schedule Time",
    remark: "Remark",

    // Actual values (user input)
    title: "",
    followupStatus: "",
    assignedTo: "",
    attachmentUrl: "",
    followupDate: "2025-02-28T14:01:17.017Z",
    followupTime: "2025-02-28T14:01:17.017Z",
    remark: "",

    // Separate dropdown lists for each field
    statusOptions: [],
    assignOptions: [],
};

const addFollowUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SUBMIT_SUCCESS":
            return { ...state, isAuthenticated: true };

        case "CHANGE_TITLE":
            return { ...state, title: action.payload };

        case "CHANGE_FOLLOWUP_STATUS":
            return { ...state, followupStatus: action.payload };

        case "CHANGE_ASSIGNED_TO":
            return { ...state, assignedTo: action.payload };

        case "CHANGE_ATTACHMENT":
            return { ...state, attachmentUrl: action.payload };

        case "CHANGE_FOLLOWUP_DATE":
            return { ...state, followupDate: action.payload };

        case "CHANGE_FOLLOWUP_TIME":
            return { ...state, followupTime: action.payload };

        case "CHANGE_REMARK":
            return { ...state, remark: action.payload };

        case "SET_STATUS_OPTIONS":
            return { ...state, statusOptions: action.payload };

        case "SET_ASSIGNED_TO_OPTIONS":
            return { ...state, assignOptions: action.payload };

        default:
            return state;
    }
};

export default addFollowUpReducer;
