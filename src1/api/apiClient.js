import { Alert } from 'react-native';
// GET Request Function
// export const apiGet = async (url,token) => {
//   try {
  
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         // Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//         Authorization: token,
        

//       },
//     });
//     console.log(url+"---------------------s------------------------------")
//     //console.log("🛠️ Token being sent:", token);

//     if (!response.ok) {
//       //alert(11)
//       console.error("HTTP error! Status:"+ response.status);
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     //alert(JSON.stringify(response))
//     return await response.json();
//   } catch (error) {
//     console.error(`GET ${endpoint} Error:`,error.response?.data || error.message,
// );
//     throw error;
//   }
// };
export const apiGet = async (url, token, id) => {
  try {
      console.log("🌐 Request URL:", url);
      console.log("🔑 Sending Token:", token);
      console.log("🆔 Sending ID in Header:", id);

      const response = await fetch(url, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,  // Ensure Bearer token format
              'id': id,  // Sending ID in header
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



