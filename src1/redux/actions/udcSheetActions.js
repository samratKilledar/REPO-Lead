import {udcSheetApiCall} from '../../api/authApi';
import {setItem, getItem} from '../../api/storageServices';
import api from "../../api/api";

// Action Types
export const UPDATE_SERVICES = "UPDATE_SERVICES";
export const UPDATE_SERVICENAME = "UPDATE_SERVICENAME";
export const SUBMIT_CLICK = "SUBMIT_CLICK";
export const SUBMIT_SUCCESS = "SUBMIT_SUCCESS";
export const SUBMIT_FAILURE ="SUBMIT_FAILURE";




export const updateServices = (services) => ({
    type: UPDATE_SERVICES,
    payload: services,
});

export const updateServicename = (servicename) => ({
    type: UPDATE_SERVICENAME,
    payload: servicename,
});


// export const saveServices = (ServicesData) => async (dispatch) => {
//     try {
//         const response = await fetch("YOUR_API_ENDPOINT", {
//             method: "POST", 
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(ServicesData),
//         });

//         const data = await response.json();

//         if (response.ok) {
//            alert("Success", "Profile updated successfully!");
//         } else {
//           alert("Error", data.message || "Failed to update service name");
//         }
//     } catch (error) {
//        alert("Error", "Network error while updating service name");
//     }
// };

export const udcSheetUser = () => async (dispatch, getState) => {
  try {
    const {services,servicename} = getState().udcSheetApi; // Get loginValue from Redux
    dispatch({type: SUBMIT_CLICK});

    const response = await udcSheetApiCall(services,servicename);
    if (response.success){
        dispatch({type: SUBMIT_SUCCESS }); 
    } else {
          dispatch({type: SUBMIT_FAILURE, payload: response.message}); // Dispatch failure action
        }
      } catch (error) {
        dispatch({type: SUBMIT_FAILURE, payload: error.message}); // Dispatch failure action
      }
    };

