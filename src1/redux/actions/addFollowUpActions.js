export const SUBMIT_CLICK = "SUBMIT_CLICK";
export const SUBMIT_SUCCESS = "SUBMIT_SUCCESS";
export const SUBMIT_FAILURE = "SUBMIT_FAILURE";
export const CHANGE_TITLE = "CHANGE_TITLE";
export const CHANGE_FOLLOWUP_STATUS = "CHANGE_FOLLOWUP_STATUS";
export const CHANGE_ASSIGNED_TO = "CHANGE_ASSIGNED_TO";
export const CHANGE_ATTACHMENT = "CHANGE_ATTACHMENT";
export const CHANGE_FOLLOWUP_DATE = "CHANGE_FOLLOWUP_DATE";
export const CHANGE_FOLLOWUP_TIME = "CHANGE_FOLLOWUP_TIME";
export const CHANGE_REMARK = "CHANGE_REMARK";
export const SET_STATUS_OPTIONS = "SET_STATUS_OPTIONS";
export const SET_ASSIGNED_TO_OPTIONS = "SET_ASSIGNED_TO_OPTIONS";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { addFollowUpApiCall } from "../../api/mainApi"; // Import API function

export const submitFollowUp = () => async (dispatch, getState) => {
    try {
        const { title, followupStatus, assignedTo, attachmentUrl, followupDate, followupTime, remark } = getState().addFollowUp;
        const formData = { title, followupStatus, assignedTo, attachmentUrl, followupDate, followupTime, remark };
        console.log("🔥 submitFollowUp function triggered!", formData);

        dispatch({ type: SUBMIT_CLICK }); 

        let token = await AsyncStorage.getItem("authToken");
        console.log("🔑 Retrieved Token:", token);
    
        if (!token) {
          alert("❌ No authentication token found! Please log in again.");
          dispatch({ type: SUBMIT_FAILURE, payload: "Authentication token missing" });
          return;
        }
        // 📩 API call
        const response = await addFollowUpApiCall(formData);
        console.log("📩 API Response:", response);

         if (response.success) { 
            dispatch({ type: SUBMIT_SUCCESS });
            alert("✅ Follow-up added successfully!");
        } else {
            dispatch({ type: SUBMIT_FAILURE, payload: response.message || "Unknown error" });
            alert("❌ Submission failed: " + response.message);
        }
    } catch (error) {
        dispatch({ type: SUBMIT_FAILURE, payload: error.message });
        alert("❌ Submission failed: " + error.message);
    }
};
export const changeTitle = (title) => ({ type: "CHANGE_TITLE", payload: title });
export const changeFollowupStatus = (followupStatus) => ({ type: "CHANGE_FOLLOWUP_STATUS", payload: followupStatus });
export const changeAssignedTo = (assignedTo) => ({ type: "CHANGE_ASSIGNED_TO", payload: assignedTo });
export const changeAttachment = (attachmentUrl) => ({ type: "CHANGE_ATTACHMENT", payload: attachmentUrl });
export const changeFollowupDate = (followupDate) => ({ type: "CHANGE_FOLLOWUP_DATE", payload: followupDate });
export const changeFollowupTime = (followupTime) => ({ type: "CHANGE_FOLLOWUP_TIME", payload: followupTime });
export const changeRemark = (remark) => ({ type: "CHANGE_REMARK", payload: remark });
export const setStatusOptions = (options) => ({ type: "SET_STATUS_OPTIONS", payload: options });
export const setAssignedToOptions = (options) => ({ type: "SET_ASSIGNED_TO_OPTIONS", payload: options });

