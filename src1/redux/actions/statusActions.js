// Action Types
export const FETCH_STATUS_SUCCESS = "FETCH_STATUS_SUCCESS";
export const FETCH_STATUS_FAILURE = "FETCH_STATUS_FAILURE";

// ✅ API URLs based on type
const API_URLS = {
  followUp: "https://opticalerp.in:85/api/udc/getvaluesbytype?type=Leads",
  clientFollowUp: "https://opticalerp.in:85/api/udc/getvaluesbytype?type=Clients",
  taskpriority: "https://opticalerp.in:85/api/udc/getvaluesbytype?type=Priority",
  service: "https://opticalerp.in:85/api/udc/getvaluesbytype?type=Services",
  leadsource: "https://opticalerp.in:85/api/udc/getvaluesbytype?type=Lead%20Source",
};

// ✅ Fetch Status List Based on Type
export const fetchStatusList = (apiType) => async (dispatch) => {
  try {
    const apiUrl = API_URLS[apiType];
    if (!apiUrl) throw new Error("Invalid API type");

    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log(`Fetched ${apiType} Status Data:`, data);

    const formattedData = Array.isArray(data) ? data : data?.result || [];

    dispatch({
      type: FETCH_STATUS_SUCCESS,
      payload: { apiType, data: formattedData },
    });
  } catch (error) {
    console.error(`Error fetching ${apiType} status:`, error);
    dispatch({
      type: FETCH_STATUS_FAILURE,
      payload: { apiType, error: error.message },
    });
  }
};
