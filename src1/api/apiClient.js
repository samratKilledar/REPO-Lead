
// GET Request Function
export const apiGet = async (url,tokan) => {
  try {
  
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Authorization: tokan,

      },
    });
    console.log(url+"---------------------s------------------------------")

    if (!response.ok) {
      //alert(11)
      console.error("HTTP error! Status:"+ response.status);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    //alert(JSON.stringify(response))
    return await response.json();
  } catch (error) {
    console.error(`GET ${endpoint} Error:`,error.response?.data || error.message,
);
    throw error;
  }
};

// POST Request Function
export const apiPost = async (url, param = {}) => {
  const data = param.data;
  console.log(JSON.stringify(data) + '=ssss------------------sss=' + data.customerId);
  //{"customerId":"Root","email":"Supra@admin.com","password":"Admin@123"}=ssss------------------sss=Root
  try {
    const response = await fetch(url, {
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
    console.log('===s===>' + JSON.stringify(response));
    return await response.json();
  } catch (error) {
    console.log('===errrrrrrror===>' + JSON.stringify(error));

    return await error.message;
  }
};

import AsyncStorage from "@react-native-async-storage/async-storage";
export const addfollowUpApiPost = async (url, param = {}) => {
  const formData = param.data;
  console.log("🔄 Sending Data:", JSON.stringify(formData));

  try {
    // 🔑 Retrieve token from AsyncStorage
     let token = await AsyncStorage.getItem('authToken');
        console.log("🔑 Retrieved Token:", token);

        if (!token) {
            alert("❌ No authentication token found! Please log in again.");
            return { success: false, message: "Authentication token missing" }; 
        }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // ✅ Include authentication token
      },
      body: JSON.stringify(formData), // ✅ Send full form data dynamically
    });

    const result = await response.json();
    console.log("✅ API Response:", JSON.stringify(result));

    return result;
  } catch (error) {
    console.error("❌ API Request Failed:", error);
    return { success: false, message: error.message || "Request failed" };
  }
};
