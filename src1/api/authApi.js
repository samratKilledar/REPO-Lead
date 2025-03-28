import {apiGet, apiPost, apiPut,postApi } from './apiClient';
import {scheduleTokenRefresh} from "../redux/actions/authActions"
import {api} from './api';
import { getItem } from '../api/storageServices';
import AsyncStorage from "@react-native-async-storage/async-storage";

// Login API
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
          //Authorization: Bearer ${token},
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
      await AsyncStorage.setItem("authToken", result.token);
      await AsyncStorage.setItem("refreshToken", result.refreshToken);
      await AsyncStorage.setItem("refreshTokenExpiryTime", result.refreshTokenExpiryTime);
  
      scheduleTokenRefresh(); // Reschedule the refresh
      return result;
    } catch (error) {
      console.error("❌ Token refresh failed:", error.message);
      return null;
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

