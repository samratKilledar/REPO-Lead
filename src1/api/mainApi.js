import {apiGet ,apiGetLeadList1, apiPost,apiPostLead,apiPostFollowup, apiGetDetails} from './apiClient';
import {api} from './api';
import { getItem } from './storageServices';

// Register API
export const followUp = async authToken => {
    //console.log("ss------ssss"+authToken)
    return await apiGet(api.followUp,authToken);
};
export const clientFollowUp = async authToken => {
    //console.log("ss------ssss"+authToken)
    return await apiGet(api.clientFollowUp,authToken);
};
export const taskPriority = async authToken => {
    //console.log("ss------ssss"+authToken)
    return await apiGet(api.taskPriority,authToken);
};
export const service = async authToken => {
    //console.log("ss------ssss"+authToken)
    return await apiGet(api.service,authToken);
};
export const leadSource = async authToken => {
    //console.log("ss------ssss"+authToken)
    return await apiGet(api.leadSource,authToken);
};
export const country = async authToken => {
    //console.log("ss------ssss"+authToken)
    return await apiGet(api.country,authToken);
};
export const city = async authToken => {
    //console.log("ss------ssss"+authToken)
    return await apiGet(api.city,authToken);
};
export const state = async authToken => {
    //console.log("ss------ssss"+authToken)
    return await apiGet(api.state,authToken);
};
export const occupation = async authToken => {
    //console.log("ss------ssss"+authToken)
    return await apiGet(api.occupation,authToken);
};

export const assignTo = async authToken => {
    console.log(authToken+"-------------------------------ss------ssss"+api.assignTo)
    return await apiGetLeadList1(api.assignTo,authToken);
};

export const getAllLeadApi= async authToken=>{
    //  console.log("ss-------->"+authToken)
   return await apiGet(api.getAllLeadApi);
}
export const upComingTask= async authToken=>{
    //console.log("ss---sameeeeee---ssss"+authToken)
    return await apiGet(api.upComingTask,authToken);
}
export const leadDetail= async authToken=>{
    //console.log("ss--lead---ssss"+authToken)
    return await apiGet(api.leadDetail,authToken);
}
export const client= async authToken=>{
    console.log("ss--clientttad---ssss"+authToken)
    return await apiGet(api.client,authToken);
}
export const clientDetail= async authToken=>{
    console.log("ss--clientttad---ssss"+authToken)
    return await apiGet(api.clientDetail,authToken);
}
export const addTaskApiCall= async data => {
    console.log('inside function' + JSON.stringify(data));
    return await apiPost(api.addTask, {data});
  }; 
  
  export const profileDetail = async (authToken) => {
    console.log("📡 Fetching profile details...");
    console.log("🔑 Token:", authToken); // Check if token is correctly passed

    try {
        const response = await apiGetDetails(api.profileDetails, authToken,1);
        console.log("✅ Server Response:", response); // Log the fetched data
        return response;
    } catch (error) {
        console.error("🚨 Error fetching profile details:", error.message);
        return { success: false, message: error.message };
    }
};

export const leadAPISubmit = async (data,tenantId) =>{
    console.log(tenantId+'inside function' + JSON.stringify(data));
    return await apiPostLead(api.leadSubmit, data,tenantId);
}

export const followupAPISubmit = async data => {
    const authToken = await getItem("authToken");
    console.log("------------------------------token--"+JSON.stringify(authToken));
    console.log('inside function' + JSON.stringify(data));
    return await apiPostFollowup(api.addFollowUp, {data});
  };


export const taskListResApi= async authToken=>{
    //  console.log("ss---samrat---ssss"+authToken)
    return await apiGet(api.taskList,authToken);
}

export const particularLeadDetailApi =async authToken=>{
    // console.log("=====particularLeadDetailApi==="+authToken);
    return await apiGet(api.particularLeadDetailApi, authToken);
}

// export const postDeleteLead = async (leadId) => {
//     const Token = await AsyncStorage.getItem("authToken");
//   try {
//     const apiUrl = `https://opticalerp.in:85/api/lead/delete`;
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ leadId }), // Sending leadId in body as per API requirement
//     });

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error deleting lead:", error.message);
//     throw error;
//   }
// };





