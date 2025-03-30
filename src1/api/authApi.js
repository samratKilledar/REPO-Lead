import {apiGet, apiPost, apiPut,postApi,apiGetLeadList,apiPostForgotPass,apiGetEditList} from './apiClient';
import {api} from './api';
import{scheduleTokenRefresh} from '../redux/actions/authActions'
import { getItem, setItem } from './storageServices';
export const loginUserApiCall = async data => {
    console.log('inside function' + JSON.stringify(data));
    return await apiPost(api.authApi, { data });
  };

  export const refreshTokenApiCall = async () => {
    try {
        const token = await AsyncStorage.getItem("authToken");
        const refreshToken = await AsyncStorage.getItem("refreshToken");
        
        const cleanedToken = token ? JSON.parse(token) : null;
        const cleanedRefreshToken = refreshToken ? JSON.parse(refreshToken) : null;
        
        const requestBody = {
          token: cleanedToken,
          refreshToken: cleanedRefreshToken,
        };
      console.log("🔍 Refresh Token Request Payload:", requestBody);
  
      const response = await fetch(api.refreshApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          tenant: "root", 
          //Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });
      if (!response.ok) {
        const errorResponse = await response.text();
        console.error(`❌ HTTP Error! Status: ${response.status}, Response: ${errorResponse}`);
        throw new Error(`HTTP Error! Status: ${response.status}, Response: ${errorResponse}`);
      }
  
      const result = await response.json();
     console.log("🔄 Token refreshed:", result);
  
      // 🔹 Store the new token
      await AsyncStorage.setItem("newToken", result.token);
      await AsyncStorage.setItem("refreshToken", result.refreshToken);
      await AsyncStorage.setItem("refreshTokenExpiryTime", result.refreshTokenExpiryTime);
  
      scheduleTokenRefresh(); // Reschedule the refresh
      return result;
    } catch (error) {
      console.error("❌ Token refresh failed:", error.message);
      return null;
    }
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



import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserId = async () => {
    try {
        const token = await AsyncStorage.getItem('token'); // Retrieve token from storage
        if (token) {
            const decoded = jwtDecode(token); // Decode JWT
            return decoded.id; // Extract user ID
        }
    } catch (error) {
        console.error('Error decoding token:', error);
    }
    return null;
};



