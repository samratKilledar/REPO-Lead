
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
// export const apiPost = async (url, param = {}) => {
//   const data = param.data;
//   console.log("Data being sent to API:", JSON.stringify(data));

//   try {
//     const token = await getItem('authToken'); // Fetch token from storage

//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`, // Add authentication token
//         'tenant': data.customerId,
//       },
//       body: JSON.stringify(data),
//     });

//     const responseData = await response.json();
//     console.log("API Response:", responseData);

//     return responseData;
//   } catch (error) {
//     console.error("Error while making API request:", error);
//     return error.message;
//   }
// };





