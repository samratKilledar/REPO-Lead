import {apiGet, apiPost} from './apiClient';
import {api} from './api';


// Register API
export const followUp = async authToken => {
    //console.log("ss------ssss"+authToken)
    return await apiGet(api.followUp,authToken);
};
export const clientFollowUp = async authToken => {
    //console.log("ss------ssss"+authToken)
    return await apiGet(api.clientFollowUp,authToken);
};
export const taskPriority = async authToken => {
    //console.log("ss------ssss"+authToken)
    return await apiGet(api.taskPriority,authToken);
};
export const service = async authToken => {
    //console.log("ss------ssss"+authToken)
    return await apiGet(api.service,authToken);
};
export const leadSource = async authToken => {
    //console.log("ss------ssss"+authToken)
    return await apiGet(api.leadSource,authToken);
};
export const country = async authToken => {
    //console.log("ss------ssss"+authToken)
    return await apiGet(api.country,authToken);
};
export const city = async authToken => {
    //console.log("ss------ssss"+authToken)
    return await apiGet(api.city,authToken);
};
export const state = async authToken => {
    //console.log("ss------ssss"+authToken)
    return await apiGet(api.state,authToken);
};
export const occupation = async authToken => {
    //console.log("ss------ssss"+authToken)
    return await apiGet(api.occupation,authToken);
};

export const getAllLeadApi= async authToken=>{
    // console.log("ss------ssss"+authToken)
    return await apiGet(api.getAllLeadApi,authToken);
}


