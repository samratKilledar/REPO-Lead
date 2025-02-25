import {apiPost} from './apiClient';

// Login API
export const loginUserApiCall = async data => {
  console.log('inside function' + JSON.stringify(data));
  return await apiPost('auth/login', {data});
};

// Register API
export const registerUser = async userData => {
  return await apiPost('auth/register', userData);
};
