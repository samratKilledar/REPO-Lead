import {apiGet , apiPost} from './apiClient';
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
    //console.log("ss------ssss"+authToken)
    return await apiGet(api.getAllLeadApi,authToken);
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



  
  





