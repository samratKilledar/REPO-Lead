
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
  upComingTask,
  leadDetail,
  client,
  clientDetail,
  getAllLeadApi,taskListResApi,particularLeadDetailApi
} from '../../api/mainApi';
export const FETCH_DROPDOWN_SUCCESS = 'FETCH_DROPDOWN_SUCCESS';
export const FETCH_DROPDOWN_FAILURE = 'FETCH_DROPDOWN_FAILURE';
export const callAllDropDownAPI = storedData => {
  return async dispatch => {
    try {
      const [
        followUpRes,
        clientFollowUpRes,
        taskPriorityRes,
        serviceRes,
        leadSourceRes,
        countryRes,
        cityRes,
        stateRes,
        occupationRes,
        //getAllLeadApiRes,
       //  taskListRes,
        // particularLeadDetailApiRes,
        upComingTaskRes,
        leadDetailRes,
        clientRes,
        clientDetailRes,
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
      //  getAllLeadApi(storedData),
       //  taskListResApi(storedData),
        // particularLeadDetailApi(storedData),
        upComingTask(storedData),
        leadDetail(storedData),
        client(storedData),
        clientDetail(storedData),
      ]);
      console.log('1.followUp API Response:==>'+ JSON.stringify(followUpRes));
      console.log('2.clientFollowUp API Response:==>'+ JSON.stringify(clientFollowUpRes));
      console.log('3.taskPriority API Response:'+ JSON.stringify(taskPriorityRes));
      console.log('4.service API Response:'+ JSON.stringify(serviceRes));
      console.log('5.leadSourceRes API Response:'+ JSON.stringify(leadSourceRes));
      console.log('6.country API Response:'+ JSON.stringify(countryRes));
      console.log('7.cityRes API Response', JSON.stringify(cityRes));
      console.log('8.stateRes API Response:',  JSON.stringify(stateRes));
      console.log('9.occupationRes API Response:',  JSON.stringify(occupationRes));
     // console.log('10.getAllLeadApi API Response:',  JSON.stringify(getAllLeadApiRes));
      console.log('11.taskListResApi API Response:',  JSON.stringify(taskListRes));
      // console.log("=========particularLeadDetailApiRes=======>"+particularLeadDetailApiRes)

      // console.log('Third getAllLeadApi Response:--------------------->', JSON.stringify(getAllLeadApiRes));
      console.log('Third API Response:', upComingTaskRes);
      console.log('Third API Response:', leadDetailRes);
      console.log('Third API Response:', clientRes);
      console.log('Third API Response:', clientDetailRes);
      
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
          //getAllLeadApiRes,
          // taskListRes,
          // particularLeadDetailApiRes,
          upComingTaskRes,
          leadDetailRes,
          clientRes,
          clientDetailRes,
        },
      });
    } catch (error) {
      alert('Dropdown API Error:==>'+ JSON.stringify(error));
      dispatch({type: FETCH_DROPDOWN_FAILURE, payload: error.message});
    }
  };
};
