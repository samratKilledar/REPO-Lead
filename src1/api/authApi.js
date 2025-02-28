import {apiGet, apiPost} from './apiClient';
import {api} from './api';
import { getItem } from '../api/storageServices';

// Login API
export const loginUserApiCall = async data => {
  console.log('inside function' + JSON.stringify(data));
  return await apiPost(api.authApi, {data});
};

// Register API
export const readAllLead = async userData => {

    console.log(getItem("authToken"))
    return await apiGet(api.getAllLeadApi,getItem(authToken));
};

export const l = async userData => {
  
    return await apiGet(api.getAllLeadApi,getItem(userData));
};