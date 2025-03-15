import {apiGet, apiPost, apiPut,postApi,apiGetLeadList,apiPostForgotPass,apiPutEdit} from './apiClient';
import {api} from './api';
import { getItem } from '../api/storageServices';
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


// Login API
export const loginUserApiCall = async data => {
    console.log('inside function' + JSON.stringify(data));
    return await apiPost(api.authApi, { data });
};
//forgot Password
export const forgotPassApiCall = async data => {
    console.log('inside function' + JSON.stringify(data));
    return await apiPostForgotPass(api.forgotPasswordApi, { data });
};


export const verifyUserApiCall = async (password, email, token) => {
    const param = {
        password: password,
        email: email,
        token: token,
    };

    try {
        console.log("📡 Sending verification request:", param);

        const response = await fetch(api.verifyUser, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(param),
        });

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log("✅ Verification Response:", result);
        return result;
    } catch (error) {
        console.log("🚨 Verification API Error:", error.message);
        return { success: false, message: error.message };
    }
};


export const submitPasswordApiCall = async (newPassword, confirmNewPassword) => {
    const param = {
        data: {
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
    return await apiGet(api.getAllLeadApi,getItem("authToken"));
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


export const LeadList = async userData => {
    const authToken = await getItem("authToken");

    console.log("------------------------------token--"+JSON.stringify(authToken));
    // let authToken = getItem("authToken");
    return await apiGetLeadList(api.getAllLeadApi,authToken);
}


export const updateUserProfile = async userData => {
    console.log("data---"+JSON.stringify(authToken));
    const authToken = await getItem("authToken");

    console.log("-------------ssss------------token--"+JSON.stringify(authToken));
    return await apiPutEdit(api.editProfileApi,authToken,userData);
}


export const leadAddServiceApiCall = async userData => {
    console.log("data---"+JSON.stringify(authToken));
    const authToken = await getItem("authToken");

    console.log("-----sbssss--"+JSON.stringify(authToken));
    return await apiGet(api.leadAddServiceApi,authToken);
}
