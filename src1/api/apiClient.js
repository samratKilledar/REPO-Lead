import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//GET Request Function
export const apiGet = async (url, token) => {
  try {

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Authorization: token,


      },
    });
   // console.log(url + "---------------------s------------------------------")
    console.log("🛠️ Token being sent:"+ JSON.stringify(response));

    if (!response.ok) {
      //alert(11)
      console.error("HTTP error! Status:" + response.status);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    //alert(JSON.stringify(response))
    return await response.json();
  } catch (error) {
    console.error(`GET ${endpoint} Error:`, error.response?.data || error.message,
    );
    throw error;
  }
};

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


export const apiPostLead = async (url, payload, tenantId) => {
  console.log(url + "-------" + JSON.stringify(payload) + "-----------------" + tenantId);

  try {
    const token = await AsyncStorage.getItem("newToken");
    if (!token) {
      throw new Error("Authentication token not found. Please login again.");
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        tenant: tenantId,
      },
      body: JSON.stringify(payload),
    });

    console.log("📢 Response Status Code:", response.status);
    console.log("📢 Response Headers:", response.headers);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ API Error:", response.status, errorText);
     // Alert.alert("Error", `HTTP Error ${response.status}: ${errorText}`);
      return { success: false, status: response.status, error: errorText };
    }

    const text = await response.text();
    if (!text.trim()) {
      console.warn("⚠ Server returned an empty response.");
     // Alert.alert("Lead added successfully.");
      return { success: true, message: "Lead added successfully." };
    }

    const result = JSON.parse(text);
    console.log("✅ API Response Body:", result);

    return { success: true, data: result };
  } catch (error) {
    //Alert.alert("Error", error.message);
    console.error("❌ Error:", error.message);
    return { success: false, error: error.message };
  }
};



export const apiGetLeadList = async (url, token) => {
  console.log("Making GET request to:=============", url);
  console.log("Using token:================", token);

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Response status:===============>", response.status);

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


export const apiGetLeadList1 = async (url, token) => {
  console.log("samrat=============", url);
  console.log("sss================", token);

  try {
    const token = await AsyncStorage.getItem("newToken");
      if (token == null) {
        apiGetLeadList1(api.assignTo)
        throw new Error("------------------------------------Authentication token not found. Please login again.");
      }
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("samres===============>", response.status);

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

    // ✅ Detect Content-Type (JSON or Plain Text)
    const contentType = response.headers.get("content-type");
    let result;

    if (contentType && contentType.includes("application/json")) {
      result = await response.json(); // ✅ Parse JSON response
    } else {
      result = await response.text(); // ✅ Handle plain text response
    }

    //console.log("✅ API Success:", result);
    Alert.alert("Success", result);

    return { success: true, message: result };

  } catch (error) {
    console.error('🚨 Network/API Error:', error.message);
    return { success: false, message: error.message };
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

export const deleteLeadApi = async (id) => {
  const token = await AsyncStorage.getItem("newToken");

  try {
    const apiUrl = `https://opticalerp.in:85/api/lead/delete?leadId=${id}`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Response Status Code:------>", JSON.stringify(response));

    if (!response.ok) {
      throw new Error(`Failed to delete lead (Status: ${response.status})`);
    }

    console.log("Lead deleted successfully");
    return { success: true }; // Ensure API function returns a response
  } catch (error) {
    console.error("Error deleting lead:", error.message);
    throw error;
  }
};

export const apiGetEditList = async (url,token) => {
  console.log("Making GET request to:", url);
  console.log("Using token:", token); 

  try {
    const token = await AsyncStorage.getItem("newToken");
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