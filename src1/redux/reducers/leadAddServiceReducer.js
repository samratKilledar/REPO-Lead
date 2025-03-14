import { 
    UPDATE_REMARK, 
    UPDATE_SERVICES,
    SUBMIT_CLICK,
    SUBMIT_SUCCESS,
    SUBMIT_FAILURE,

} from "../reducers/leadAddServiceReducer";

const initialState = {
    isUpdating: false,
    remark: "",
    services: [],

    RemarkPlaceholder: "firstName",
    ServicesPlaceholder: [],
};

const leadAddServiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_SUCCESS:
            return { ...state, isUpdating: true };

        case UPDATE_REMARK:
            return { ...state, remark: action.payload };

        case UPDATE_SERVICES:
            return { ...state, services: action.payload };

        default:
            return state;
    }
};

export default leadAddServiceReducer;
