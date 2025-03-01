const initialState = {
    isUpdating: false,
    remark: "",
    services: [],

    RemarkPlaceholder: "firstName",
    ServicesPlaceholder: [],
};

// Action Types
export const UPDATE_REMARK = "UPDATE_REMARK";
export const UPDATE_SERVICES = "UPDATE_SERVICES";


const leadAddServiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_REMARK:
            return { ...state, remark: action.payload };

        case UPDATE_SERVICES:
            return { ...state, services: action.payload };

        default:
            return state;
    }
};

export default leadAddServiceReducer;
