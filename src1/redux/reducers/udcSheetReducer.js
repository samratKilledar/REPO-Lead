import { 
    UPDATE_SERVICES, 
    UPDATE_SERVICENAME, 
    SUBMIT_SUCCESS ,
    SUBMIT_FAILURE,
} from "../actions/udcSheetActions";

const initialState = {
    isUpdating: false,
    services: [],
    servicename: "",

    servicenamePlaceholder: "Service Name",
    servicesPlaceholder: ["Select Services"],

};



const udcSheetReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_SUCCESS:
            return { ...state, isUpdating: true };

        case SUBMIT_FAILURE:
            return { ...state, isUpdating: false };

         case UPDATE_SERVICES:
            return { ...state, services: action.payload };

        case UPDATE_SERVICENAME:
            return { ...state, servicename: action.payload };

        default:
            return state;
    }
}

export default udcSheetReducer;
