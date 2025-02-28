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


export const fetchDropdownData = async (apiType) => {
    try {
        const authToken = await getItem("authToken");
        const apiUrl = api[apiType];
        if (!apiUrl) throw new Error("Invalid API type");
        
        return await apiGet(apiUrl, authToken);
    } catch (error) {
        console.error(`Error fetching dropdown data for ${apiType}:`, error);
        throw error;
    }
};