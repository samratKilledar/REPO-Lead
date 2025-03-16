import {LeadList} from '../../api/authApi';
import {setItem, getItem} from '../../api/storageServices';

export const FETCH_LEADS_REQUEST = "FETCH_LEADS_REQUEST";
export const FETCH_LEADS_SUCCESS = "FETCH_LEADS_SUCCESS";
export const FETCH_LEADS_FAILURE = "FETCH_LEADS_FAILURE";

export const fetchLeadsRequest = () => ({
  type: FETCH_LEADS_REQUEST,
});

export const fetchLeadsSuccess = (leads) => ({
  type: FETCH_LEADS_SUCCESS,
  payload: leads,
});

export const fetchLeadsFailure = (error) => ({
  type: FETCH_LEADS_FAILURE,
  payload: error,
});

export const fetchLeads = async (dispatch) => {
  try {
    console.log(1111);
    const data = await LeadList();

    alert("===action===>"+data);
    dispatch({type: FETCH_LEADS_SUCCESS, payload: data});
  } catch (error) {
    dispatch({type: FETCH_LEADS_FAILURE, payload: error.message}); 
  }
};