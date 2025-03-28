import {apiGet , apiPost,apiPostLead , apiGetassign , apigetAddFollowUp} from './apiClient';
import {api} from './api';
import { getItem } from './storageServices';
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
export const assignTo = async authToken => {
    //console.log("ss------ssss"+authToken)
    return await apiGetassign(api.assignTo,authToken);
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
    //  console.log("ss-------->"+authToken)
   return await apiGet(api.getAllLeadApi);
}
export const upComingTask= async authToken=>{
    //console.log("ss---sameeeeee---ssss"+authToken)
    return await apiGet(api.upComingTask,authToken);
}
export const leadDetail= async authToken=>{
    //console.log("ss--lead---ssss"+authToken)
    return await apiGet(api.leadDetail,authToken);
}
export const client= async authToken=>{
    console.log("ss--clientttad---ssss"+authToken)
    return await apiGet(api.client,authToken);
}
export const clientDetail= async authToken=>{
    console.log("ss--clientttad---ssss"+authToken)
    return await apiGet(api.clientDetail,authToken);
}
export const addTaskApiCall= async data => {
    console.log('inside function' + JSON.stringify(data));
    return await apiPost(api.addTask, {data});
}; 

export const leadAPISubmit = async (data,tenantId) =>{
    console.log(tenantId+'inside function' + JSON.stringify(data));
    return await apiPostLead(api.leadSubmit, data,tenantId);
}
export const addFollowUpAPI = async (data,tenantId) =>{
    console.log(tenantId+'inside function' + JSON.stringify(data));
    return await apigetAddFollowUp(api.addFollowUp, data,tenantId);
}
  


export const taskListResApi= async authToken=>{
    //  console.log("ss---samrat---ssss"+authToken)
    return await apiGet(api.taskList,authToken);
}

export const particularLeadDetailApi =async authToken=>{
    // console.log("=====particularLeadDetailApi==="+authToken);
    return await apiGet(api.particularLeadDetailApi, authToken);
}


