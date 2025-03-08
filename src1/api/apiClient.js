// GET Request Function
export const apiGet = async (url, tokan) => {
  try {
    console.warn(url + '--------------------------request-------------------------'+url);
    alert(11)
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Authorization: tokan,
      },
    });
    console.log( '--------------------------resoponse-------------------------'+response);
    if (!response.ok) {
      console.error(url + 'HTTP error! Status:' + response.status);
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
console.log(JSON.stringify(data))
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

