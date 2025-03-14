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
    console.log("inside a apiclient try")
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
    console.log("the end");
    return await response.json();
    
  } catch (error) {
    console.log('===errrrrrrror===>' + JSON.stringify(error));

    return await error.message;
  }
};




// export const apiPost = async (url, param = {}) => {
//   const data = param.data;
//   console.log("📝 Submitting Lead Data:", JSON.stringify(data));

//   try {
//     console.log("🚀 Inside API Client Try Block");

//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         tenant: 'Root', // Ensure this is the correct tenant value
//       },
//       body: JSON.stringify({
//         remark: data.remark, // 📝 User's remark input
//         assignto: data.assignto, // 🏷 Selected "Assign To" value
//         services: data.services, // 📌 Selected "Services" array
//       }),
//     });

//     console.log("📩 API Response Status:", response.status);

//     // ✅ Detect Content-Type (JSON or Plain Text)
//     const contentType = response.headers.get("content-type");
//     let result;

//     if (contentType && contentType.includes("application/json")) {
//       result = await response.json(); // ✅ Parse JSON response
//     } else {
//       result = await response.text(); // ✅ Handle plain text response
//     }

//     console.log("✅ API Success:", result);
//     return { success: true, data: result };

//   } catch (error) {
//     console.error("🚨 API Error:", error.message);
//     return { success: false, message: error.message };
//   }
// };
