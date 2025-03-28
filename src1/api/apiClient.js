// GET Request Function
export const apiGet = async (url, tokan) => {
  try {
    // console.warn(url + '--------------------------request-------------------------'+url);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Authorization: tokan,
      },
    });
    // console.log( '--------------------------resoponse-------------------------'+JSON.stringify(response));
    if (!response.ok) {
      console.error(url + '-----HTTP error! Status:----' + response.status);
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
  console.log(JSON.stringify(data));
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

import AsyncStorage from "@react-native-async-storage/async-storage";

export const apiPostLead = async (url, payload, tenantId) => {
  console.log("Sending Data to:", url);

  try {
    const token = await AsyncStorage.getItem("authToken");
    if (!token) {
      throw new Error("Authentication token not found. Please login again.");
    }

    // const payload = {
    //   id: 0,
    //   tenantId: "root",
    //   customerId: 0,
    //   firstName: "Sanika",
    //   lastName: "Patil",
    //   emailId: "string",
    //   mobileNo: "string",
    //   whatsAppNo: "string",
    //   addressLine1: "string",
    //   addressLine2: "string",
    //   cityId:2707,
    //   cityName: "",
    //   stateId: 22,
    //   stateName: "",
    //   countryId: 1,
    //   countryName: "",
    //   pincode: 0,
    //   leadSource: 9,
    //   leadSourceName: "string",
    //   otherSource: "string",
    //   occupation: 5,
    //   occupationName: "string",
    //   organisationName: "string",
    //   workType: "twquyi",
    //   monthlyIncome: 0,
    //   assignedTo: 2,
    //   assignedToName: "string",
    //   leadStatus: 0,
    //   leadStatusName: "string",
    //   createdBy: 0,
    //   createdByName: "string",
    //   leadDate: "string",
    //   isActive: true,
    //   serviceDetails: [
    //     {
    //       id: 0,
    //       customerId: 0,
    //       serviceId: 2,
    //       serviceName: "",
    //       leadId: 0,
    //       clientId: 0,
    //       isExistingClient: true,
    //       remark: "string",
    //       assignedTo: 0,
    //       assignedToName: "",
    //       isActive: true,
    //     },
    //   ],
    // };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        tenant: "root",
      },
      body: JSON.stringify(payload),
    });

    console.log("📢 Response Status Code:", response.status);
    console.log("📢 Response Headers:", response.headers);

   
    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ API Error:", response.status, errorText);
      Alert.alert("Error", `HTTP Error ${response.status}: ${errorText}`);
      return;
    }

    const text = await response.text();
    if (!text.trim()) {
      console.warn("⚠ Server returned an empty response.");
      Alert.alert("Warning", "Data sent successfully, but no response from server.");
      return;
    }

    const result = JSON.parse(text);
    console.log("✅ API Response Body:", result);
  } catch (error) {
     Alert.alert("Error", error.message);
    console.error("❌ Error:", error.message);
    throw error;
  }
};

export const apigetAddFollowUp = async (url, tenantId) => {
  console.log("Fetching Data from:", url);

  try {
    const token = await AsyncStorage.getItem("authToken");
    if (!token) {
      throw new Error("Authentication token not found. Please login again.");
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        tenant: "root",
      },
    });

    console.log("📢 Response Status Code:", response.status);
    console.log("📢 Response Headers:", response.headers);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ API Error:", response.status, errorText);
      Alert.alert("Error", `HTTP Error ${response.status}: ${errorText}`);
      return;
    }

    const text = await response.text();
    if (!text.trim()) {
      console.warn("⚠ Server returned an empty response.");
      Alert.alert("Warning", "No data received from the server.");
      return;
    }

    const result = JSON.parse(text);
    console.log("✅ API Response Body:", result);
    return result;
  } catch (error) {
    Alert.alert("Error", error.message);
    console.error("❌ Error:", error.message);
    throw error;
  }
};


