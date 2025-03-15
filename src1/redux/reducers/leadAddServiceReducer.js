import { 
    UPDATE_REMARK, 
    UPDATE_SERVICES,
    SUBMIT_CLICK,
    SUBMIT_SUCCESS,
    SUBMIT_FAILURE,

} from "../actions/leadAddServiceActions";

const initialState = {
    isUpdating: false,
    remark: "",
    services: " ",

    RemarkPlaceholder: "firstName",
    servicesName: "Services",
};

const leadAddServiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_SUCCESS:
            return { ...state, isUpdating: true };

        case SUBMIT_FAILURE:
            return { ...state, isUpdating: false };

        case UPDATE_REMARK:
            return { ...state, remark: action.payload };

        case UPDATE_SERVICES:
            return { ...state, services: action.payload.id, servicesName:action.payload.name};

        default:
            return state;
    }
};

export default leadAddServiceReducer;
