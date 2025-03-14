// import {apiGet, apiPost} from './apiClient';
// import {api} from './api';
// import { getItem } from '../api/storageServices';

// // Login API
// export const loginUserApiCall = async data => {
//   console.log('inside function' + JSON.stringify(data));
//   return await apiPost(api.authApi, {data});
// };

// // Register API
// export const readAllLead = async userData => {

//     console.log(getItem("authToken"))
//     return await apiGet(api.getAllLeadApi,getItem(authToken));
// };

// export const l = async userData => {
  
//     return await apiGet(api.getAllLeadApi,getItem(userData));
// };


// export const fetchDropdownDataApi = async (apiType) => {
//     try {
//         const authToken = await getItem("authToken");
//         const apiUrl = api[apiType];
//         if (!apiUrl) throw new Error("Invalid API type");

//         return await apiGet(apiUrl, authToken);
//     } catch (error) {
//         console.error(`Error fetching dropdown data for ${apiType}:`, error);
//         throw error;
//     }
// };

import {apiGet, apiPost,apiPostForgotPass, apiPut,postApi} from './apiClient';
import {api} from './api';
import { getItem } from '../api/storageServices';

// Login API
export const loginUserApiCall = async data => {
  console.log('inside function' + JSON.stringify(data));
  return await apiPost(api.authApi, {data});
};
//forgot Password
export const forgotPassApiCall = async data => {
    console.log('inside function' + JSON.stringify(data));
    return await apiPostForgotPass(api.forgotPasswordApi, {data});
  };

  export const submitPasswordApiCall = async (newPassword, confirmNewPassword) => {  
    const param = {
        data:{
            customerId: "Root", // Keep tenant as "Root"
            password: newPassword,
            confirmPassword: confirmNewPassword
        },    
    };

    try {
        console.log("📡 Sending request to server with data:", param);

        const response = await apiPost(api.createPass, param, {
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `Bearer ${yourAuthToken}`,  // Add if required
            },
        });

        console.log("✅ Server Response:", response);
        return response;
    } catch (error) {
        console.log("🚨 API Error:", error.response?.data || error.message);
        return { success: false, message: error.response?.data || error.message };
    }
};

// Register API
export const readAllLead = async userData => {
    console.log(getItem("authToken"))
    return await apiGet(api.getAllLeadApi,getItem(authToken));
};

// export const l = async userData => {
//     return await apiGet(api.getAllLeadApi,getItem(userData));
// };

export const fetchDropdownDataApi = async (apiType) => {
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

