// const initialState = {
//     isAuthenticated: false,
//     addTaskPlaceHolder: {
//      title: "Title",
//      type: "Type",
//      assign:"Task Assign To",
//      client:"Client",
//      dueDate:"Due Date",
//      priority:"Priority",
//      service:"Service Request",
//      startDate:"Start Date",
//      reminderDate:"Reminder Date",
//      attachment:"Attachment",
//      remark:"Remark",
//     },
//     addTaskPlaceValue: {
//       title: "",
//       type: {},
//       assign:{},
//       client:{},
//       dueDate:"null",
//       priority:{},
//       service:"",
//       startDate:"null",
//       reminderDate:"null",
//       attachment:"",
//       remark:"",
//     },
//     dropdowns: {},  // ✅ Added to store dropdown data
//     //error: null,    // ✅ Added to store error messages
//   };
  
//   const addTaskReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SUBMIT_SUCCESS':
//             return { ...state, isAuthenticated: true };
    
  
//         case 'CHANGE_TASK_CREDENTIAL':
//             return { 
//                 ...state, 
//                 loginValue: { 
//                     ...state.loginValue,  // Keep previous values
//                     ...action.payload     // Update only the fields provided
//                 } 
//             };

  
//         default:
//             return state;
//     }
//   };
  
//   export default addTaskReducer;


const initialState = {
    isAuthenticated: false,

    // Placeholder text for each field
    taskName: "Title",
    taskType: "Type",
    assignedTo: "Task Assigned To",
    clientName: "Client",
    dueDate: "Due Date",
    priority: "Priority",
    serviceRequest: "Service Request",
    startDate: "Start Date",
    reminderDate: "Reminder Date",
    attachmentName: "Attachment",
    remarks: "Remark",

    taskName: "",
    taskType: "",
    assignedTo: "",
    clientName: "",
    dueDate: "2025-02-28T14:01:17.017Z",
    priority: "",
    serviceRequest: "",
    startDate: "2025-02-28T14:01:17.017Z",
    reminderDate: "2025-02-28T14:01:17.017Z",
    attachmentName: "",
    remarks: "",

    // Separate dropdown lists for each field
    typeOptions: [],
    assignOptions: [],
    clientOptions: [],
    priorityOptions: [],
    serviceOptions: [],
};

const addTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT_SUCCESS':
            return { ...state, isAuthenticated: true };

        case 'CHANGE_TASK_NAME':
            return { ...state, taskName: action.payload };

        case 'CHANGE_TASK_TYPE':
            return { ...state, taskType: action.payload };

        case 'CHANGE_ASSIGNED_TO':
            return { ...state, assignedTo: action.payload };

        case 'CHANGE_CLIENT_NAME':
            return { ...state, clientName: action.payload };

        case 'CHANGE_DUE_DATE':
            return { ...state, dueDate: action.payload };

        case 'CHANGE_PRIORITY':
            return { ...state, priority: action.payload };

        case 'CHANGE_SERVICE_REQUEST':
            return { ...state, serviceRequest: action.payload };

        case 'CHANGE_START_DATE':
            return { ...state, startDate: action.payload };

        case 'CHANGE_REMINDER_DATE':
            return { ...state, reminderDate: action.payload };

        case 'CHANGE_ATTACHMENT_NAME':
            return { ...state, attachmentName: action.payload };

        case 'CHANGE_REMARKS':
            return { ...state, remarks: action.payload };

        case 'SET_TASK_TYPE_OPTIONS':
            return { ...state, typeOptions: action.payload };

        case 'SET_ASSIGNED_TO_OPTIONS':
            return { ...state, assignOptions: action.payload };

        case 'SET_CLIENT_NAME_OPTIONS':
            return { ...state, clientOptions: action.payload };

        case 'SET_PRIORITY_OPTIONS':
            return { ...state, priorityOptions: action.payload };

        case 'SET_SERVICE_REQUEST_OPTIONS':
            return { ...state, serviceOptions: action.payload };

        default:
            return state;
    }
};

export default addTaskReducer;

