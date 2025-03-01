import { 
    UPDATE_REMARK, 
    UPDATE_SERVICES, 

} from "../reducers/leadAddServiceReducer";



export const updateRemark = (remark) => ({
    type: UPDATE_REMARK,
    payload: remark,
});

export const updateServices = (services) => ({
    type: UPDATE_SERVICES,
    payload: services,
});

