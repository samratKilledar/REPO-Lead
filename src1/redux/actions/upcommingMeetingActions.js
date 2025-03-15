export const SET_MEETINGS = "SET_MEETINGS";
export const ADD_MEETING = "ADD_MEETING";

export const setMeetings = (meetings) => ({
  type: SET_MEETINGS,
  payload: meetings,
});

export const addMeeting = (meeting) => ({
  type: ADD_MEETING,
  payload: meeting,
});
