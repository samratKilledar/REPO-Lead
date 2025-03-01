
// GET Request Function
export const apiGet = async (url,tokan) => {
  try {
    console.log(JSON.stringify(tokan)+"=="+url)

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Authorization: tokan,

      },
    });
   // console.log("333+response"+JSON.stringify(response))

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    //alert(JSON.stringify(response))
    return await response.json();
  } catch (error) {
    console.error(
      `GET ${endpoint} Error:`,
      error.response?.data || error.message,
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


