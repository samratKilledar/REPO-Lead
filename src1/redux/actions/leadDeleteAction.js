import {deleteLeadApi} from '../../api/apiClient';

export const DELETE_LEAD_SUCCESS = "DELETE_LEAD_SUCCESS";
export const DELETE_LEAD_FAILURE = "DELETE_LEAD_FAILURE";

export const deleteLeadSuccess = (leadId) => ({
  type: DELETE_LEAD_SUCCESS,
  payload: leadId,
});

export const deleteLeadFailure = (error) => ({
  type: DELETE_LEAD_FAILURE,
  payload: error,
});

export const deleteLead = (id) => async (dispatch) => {
    try {
      await deleteLeadApi(id);
      dispatch(deleteLeadSuccess(id)); 
      // Pass ID to update state
    } catch (error) {
      dispatch(deleteLeadFailure(error.message));
    }
  };