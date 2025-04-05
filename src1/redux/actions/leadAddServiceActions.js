import {leadAddServiceApiCall} from '../../api/mainApi';
import {setItem, getItem} from '../../api/storageServices';

export const UPDATE_REMARK = "UPDATE_REMARK";
export const UPDATE_SERVICES = "UPDATE_SERVICES";
export const SUBMIT_CLICK ="SUBMIT_CLICK";
export const SUBMIT_SUCCESS = "SUBMIT_SUCCESS";
export const SUBMIT_FAILURE = "SUBMIT_FAILURE";

export const updateRemark = (remark) => ({
    type: UPDATE_REMARK,
    payload: remark,
});

export const updateServices = (services) => ({
    type: UPDATE_SERVICES,
    payload: services,
});

export const submitSuccess = userData => ({
  type: SUBMIT_SUCCESS,
  payload: userData,
});


export const leadAddServiceUser = () => async (dispatch, getState) => {
  try {
    const { remark,services} = getState().leadAddService;
    dispatch({type: SUBMIT_CLICK});

    const data = await leadAddServiceApiCall( remark,services);
    if (data.success){
        dispatch({type: SUBMIT_SUCCESS }); 
    } else {
          dispatch({type: SUBMIT_FAILURE, payload: data.message}); 
        }
      } catch (error) {
        dispatch({type: SUBMIT_FAILURE, payload: error.message}); 
      }
};

