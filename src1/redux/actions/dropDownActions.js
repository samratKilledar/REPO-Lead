// Action Types
export const FETCH_STATUS_SUCCESS = "FETCH_STATUS_SUCCESS";
export const FETCH_STATUS_FAILURE = "FETCH_STATUS_FAILURE";
export const CHANGE_STATUS = "CHANGE_STATUS";

// ✅ Fetch Status Action
export const fetchStatusList = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://opticalerp.in:85/api/udc/getvaluesbytype?type=Leads"
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched Status Data:", data); // Debugging log

    // Ensure the API returns an array
    const formattedData = Array.isArray(data)
      ? data
      : data?.result || []; // Adjust based on API response

    dispatch({ type: FETCH_STATUS_SUCCESS, payload: formattedData });
  } catch (error) {
    console.error("Error fetching status:", error);
    dispatch({ type: FETCH_STATUS_FAILURE, payload: error.message });
  }
};
