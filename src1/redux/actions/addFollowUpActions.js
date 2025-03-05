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


export const changeTitle = (title) => ({ type: "CHANGE_TITLE", payload: title });
export const changeFollowupStatus = (followupStatus) => ({ type: "CHANGE_FOLLOWUP_STATUS", payload: followupStatus });
export const changeAssignedTo = (assignedTo) => ({ type: "CHANGE_ASSIGNED_TO", payload: assignedTo });
export const changeAttachment = (attachmentUrl) => ({ type: "CHANGE_ATTACHMENT", payload: attachmentUrl });
export const changeFollowupDate = (followupDate) => ({ type: "CHANGE_FOLLOWUP_DATE", payload: followupDate });
export const changeFollowupTime = (followupTime) => ({ type: "CHANGE_FOLLOWUP_TIME", payload: followupTime });
export const changeRemark = (remark) => ({ type: "CHANGE_REMARK", payload: remark });
export const setStatusOptions = (options) => ({ type: "SET_STATUS_OPTIONS", payload: options });
export const setAssignedToOptions = (options) => ({ type: "SET_ASSIGNED_TO_OPTIONS", payload: options });
