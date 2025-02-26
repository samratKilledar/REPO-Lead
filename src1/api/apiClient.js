// import AsyncStorage from '@react-native-async-storage/async-storage';

// Base API URL
const BASE_URL = 'https://yourapi.com/api/'; // Replace with your actual API
import {api} from './api';
// Function to get the auth token from AsyncStorage
const getAuthToken = async () => {
  //   return await AsyncStorage.getItem('authToken');
};

// GET Request Function
export const apiGet = async (endpoint, params = {}) => {
  try {
    // const token = await getAuthToken();
    // const response = await axios.get(`${BASE_URL}${endpoint}`, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     'Content-Type': 'application/json',
    //   },
    //   params, // Send query parameters if needed
    // });
    // return response.data;
  } catch (error) {
    console.error(
      `GET ${endpoint} Error:`,
      error.response?.data || error.message,
    );
    throw error;
  }
};

// POST Request Function
export const apiPost = async (endpoint, param = {}) => {
  const data = param.data;
  console.log(JSON.stringify(data) + '=sssssss=' + data.password);

  try {
    const response = await fetch(api.authApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        tenant: data.customerId,
      },
      body: JSON.stringify({
        email: data.email,
        Password: data.password,
      }),
    });
    console.log('======>' + JSON.stringify(response));
    return await response.json();
  } catch (error) {
    return await error.message;
  }
};
