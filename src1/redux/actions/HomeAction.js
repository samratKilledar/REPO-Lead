import {
  followUp,
  clientFollowUp,
  taskPriority,
  service,
  leadSource,
  country,
  city,
  state,
  occupation,
  getAllLeadApi,taskListResApi,particularLeadDetailApi
} from '../../api/mainApi';
export const FETCH_DROPDOWN_SUCCESS = 'FETCH_DROPDOWN_SUCCESS';
export const FETCH_DROPDOWN_FAILURE = 'FETCH_DROPDOWN_FAILURE';
export const callAllDropDownAPI = storedData => {
  return async dispatch => {
    try {
      const [
        followUpRes,
        // clientFollowUpRes,
        // taskPriorityRes,
        // serviceRes,
        // leadSourceRes,
        // countryRes,
        // cityRes,
        // stateRes,
        // occupationRes,
        // getAllLeadApiRes,
        // taskListRes,
        // particularLeadDetailApiRes
      ] = await Promise.all([
        followUp(storedData),
        clientFollowUp(storedData),
        taskPriority(storedData),
        service(storedData),
        leadSource(storedData),
        country(storedData),
        city(storedData),
        state(storedData),
        occupation(storedData),
        getAllLeadApi(storedData),
        taskListResApi(storedData),
        particularLeadDetailApi(storedData)
      ]);
      console.log('Dropdown API Response:==>'+ followUpRes);
      console.log('Another API Response:', clientFollowUpRes);
      console.log('Third API Response:', taskPriorityRes);
      console.log('Dropdown API Response:', serviceRes);
      console.log('Another API Response:', leadSourceRes);
      console.log('Dropdown API Response:', countryRes);
      console.log('Another API Response:', cityRes);
      console.log('Third API Response:', stateRes);
      console.log('Third API Response:', getAllLeadApiRes);
      console.log("=========ddddd=======>"+taskListRes)
      console.log("=========particularLeadDetailApiRes=======>"+particularLeadDetailApiRes)

      console.log('Third getAllLeadApi Response:--------------------->', JSON.stringify(getAllLeadApiRes));

      dispatch({
        type: FETCH_DROPDOWN_SUCCESS,
        payload: {
          followUpRes,
          clientFollowUpRes,
          taskPriorityRes,
          serviceRes,
          leadSourceRes,
          countryRes,
          cityRes,
          stateRes,
          occupationRes,
          getAllLeadApiRes,
          taskListRes,
          particularLeadDetailApiRes
        },
      });
    } catch (error) {
      alert('Dropdown API Error:==>'+ JSON.stringify(error));
      dispatch({type: FETCH_DROPDOWN_FAILURE, payload: error.message});
    }
  };
};
