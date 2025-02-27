// Action Types
export const FETCH_PRIORITY_SUCCESS = "FETCH_PRIORITY_SUCCESS";
export const FETCH_PRIORITY_FAILURE = "FETCH_PRIORITY_FAILURE";
export const CHANGE_PRIORITY = "CHANGE_PRIORITY";

// ✅ Fetch Priority Action
export const fetchPriority = () => async (dispatch) => {
  try {
    // const response = await fetch(
    //   "https://opticalerp.in:85/api/udc/getvaluesbytype?type=Priority"
    // );
    const response = await fetch(
      "https://opticalerp.in:85/api/udc/getvaluesbytype?type=Priority"
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched Priority Data:", data); // Debugging log

    // Ensure the API returns an array
    const formattedData = Array.isArray(data)
      ? data
      : data?.result || []; // Adjust based on API response

    dispatch({ type: FETCH_PRIORITY_SUCCESS, payload: formattedData });
  } catch (error) {
    console.error("Error fetching priority:", error);
    dispatch({ type: FETCH_PRIORITY_FAILURE, payload: error.message });
  }
};
