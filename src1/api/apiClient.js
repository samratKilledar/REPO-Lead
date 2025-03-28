import { Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"; 


export const apiGet = async (url, token, id) => {
  try {
      // console.log("🌐 Request URL:", url);
      // console.log("🔑 Sending Token:", token);
      // console.log("🆔 Sending ID in Header:", id);

      const response = await fetch(url, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
              'id': id,
          },
      });
      if (!response.ok) {
          console.error("❌ API Response Error:", response.status);
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("📜 Server Response:", data);
      return data;

  } catch (error) {
      console.error("🚨 API Fetch Error:", error.message);
      throw error;
  }
};


// POST Request Function
export const apiPost = async (url, param = {}) => {
  const data = param.data;
  console.log(JSON.stringify(data));
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        tenant: data.customerId,
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Success:', result);
    return result;
  } catch (error) {
    console.error('Network request failed:', error.message);
    return null;
  }
};

export const apiPostLead = async (url, data,tenantId) => {
  console.log(JSON.stringify(data));
  try {
    const token = await AsyncStorage.getItem("authToken");
    if (!token) {
      throw new Error("Authentication token not found. Please login again.");
    }
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        tenant: data.customerId,
      },
      body: JSON.stringify({
          "id": 0,
          "tenantId": tenantId,
          "customerId": 0,
          "firstName": data.firstName,
          "lastName": data.lastName,
          "emailId": data.emailId,
          "mobileNo": data.mobileNo,
          "whatsAppNo": data.whatsAppNo,
          "addressLine1": data.addressLine1,
          "addressLine2": data.addressLine2,
          "cityId": data.city,
          "cityName": data.cityName,
          "stateId": data.state,
          "stateName": data.stateName,
          "countryId": data.country,
          "countryName": data.countryName,
          "pincode": data.pincode,
          "leadSource": data.leadSources,
          "leadSourceName": data.leadName,
          "otherSource": "string",
          "occupation": data.occupation,
          "occupationName": data.occupationName,
          "organisationName": "string",
          "workType": data.typeOfWork,
          "monthlyIncome": data.monthlyIncome,
          "assignedTo": data.assignedTo,
          "assignedToName": "string",
          "leadStatus": 0,
          "leadStatusName": "string",
          "createdBy": 0,
          "createdByName": "string",
          "leadDate": "string",
          "isActive": true,
          "serviceDetails": [
            {
              "id": 0,
              "customerId": 0,
              "serviceId": 0,
              "serviceName": "string",
              "leadId": 0,
              "clientId": 0,
              "isExistingClient": true,
              "remark": "string",
              "assignedTo": 0,
              "assignedToName": "string",
              "isActive": true
            }
          ]
        }
      ),
    });

    // firstName: "s",
    // lastName: "ss", 
    // leadSources: "",
    // mobileNo:"7798417997",
    // emailId:"sam@gmail.com",
    // whatsAppNo:"779841779",
    // addressLine1:"2qe",
    // addressLine2:"wfqwac",
    // city:"",
    // state:"",
    // country:"",
    // pincode:"415262",
    // occupation:"",
    // typeOfWork:"",
    // monthlyIncome:"34344344",
    // assignTo:"",
    // services:"",
    // remark:"ednkjnf"
  


    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Success:', result);
    return result;
  } catch (error) {
    console.error('Network request failed:', error.message);
    return null;
  }
};



export const apiGetLeadList = async (url, token) => {
  console.log("Making GET request to:", url);
  console.log("Using token:", token); 

  try {
    const token = await AsyncStorage.getItem("authToken");
    if (!token) {
      throw new Error("Authentication token not found. Please login again.");
    }
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Response status:", response.status); 

    if (!response.ok) {
      console.error("HTTP error! Status:", response.status);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response:", data); 
    return data;
  } catch (error) {
    console.error(`GET ${url} Error:`, error.message);
    throw error;
  }
};

export const apiGetEditList = async (url,token) => {
  console.log("Making GET request to:", url);
  console.log("Using token:", token); 

  try {
    const token = await AsyncStorage.getItem("authToken");
    if (!token) {
      throw new Error("Authentication token not found. Please login again.");
    }
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Response status:", response.status); 

    if (!response.ok) {
      console.error("HTTP error! Status:", response.status);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response:", data); 
    return data;
  } catch (error) {
    console.error(`GET ${url} Error:`, error.message);
    throw error;
  }
};


export const apiEditLeadPost = async (url, param = {}) => {
  const data = param?.data; // Use optional chaining to avoid undefined errors

  if (!data) {
    console.error('Error: Data parameter is missing.');
    return null;
  }

  console.log(JSON.stringify(data));

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        tenant: data.customerId || '', // Ensure customerId exists
      },
      body: JSON.stringify({
        email: data.email || '',
        password: data.password || '',
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Success:', result);
    return result;
  } catch (error) {
    console.error('Network request failed:', error.message);
    return null;
  }
};


export const apiPut = async (url, data, token) => {
  console.log(`PUT Request to: ${url} with data:`, JSON.stringify(data));
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('PUT Success:', result);
    return result;
  } catch (error) {
    console.error('PUT request failed:', error.message);
    return null;
  }
};


export const apiPostForgotPass = async (url, param = {}) => {
  try {
    const data = param.data || {};
    console.log('📨 Sending Data:', JSON.stringify(data));

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        tenant: 'Root',
      },
      body: JSON.stringify({ email: data.email }),
    });

    console.log('📩 API Response Status:', response.status);

    
    const contentType = response.headers.get("content-type");
    let result;

    if (contentType && contentType.includes("application/json")) {
      result = await response.json(); 
    } else {
      result = await response.text(); 
    }

    //console.log("✅ API Success:", result);
    Alert.alert("Success", result);

    return { success: true, message: result };

  } catch (error) {
    console.error('🚨 Network/API Error:', error.message);
    return { success: false, message: error.message };
  }
};


export const apiGetDetails= async (url, token, id) => {
  try {
      // console.log("🌐 Request URL:", url);
      // console.log("🔑 Sending Token:", token);
      // console.log("🆔 Sending ID in Header:", id);

      const response = await fetch(url, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,  // Ensure Bearer token format
              'id': id,  // Sending ID in header
          },
      });

      if (!response.ok) {
      //     console.error("❌ API Response Error:", response.status);
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      // console.log("📜 Server Response:", data);
      return data;

  } catch (error) {
      // console.error("🚨 API Fetch Error:", error.message);
      throw error;
  }
};

export const apiPutPassword = async (url, param = {}) => {
  const data = param.data;
  console.log(JSON.stringify(data));

  try {
      const response = await fetch(url, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      });

      if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Success:', result);
      return result;
  } catch (error) {
      console.error('Network request failed:', error.message);
      return { success: false, message: error.message };
  }
};