export const api={
    authApi:"https://opticalerp.in:85/api/tokens/gettoken",
    forgotPasswordApi:"https://opticalerp.in:85/api/users/forgotpassword/forgot-password",
    createPass:"https://opticalerp.in:85/api/currentuser/changepassword/change-password",
    getAllLeadApi:"https://opticalerp.in:85/api/lead/getlist/get-all",
    

    //all drop down API
    followUp: "https://opticalerp.in:85/api/udc/getvaluesbytype?type=Leads",
    clientFollowUp: "https://opticalerp.in:85/api/udc/getvaluesbytype?type=Clients",
    taskPriority: "https://opticalerp.in:85/api/udc/getvaluesbytype?type=Priority",
    service: "https://opticalerp.in:85/api/udc/getvaluesbytype?type=Services",
    leadSource: "https://opticalerp.in:85/api/udc/getvaluesbytype?type=Lead%20Source",
    country:"https://opticalerp.in:85/api/cascadecountrycitystate/getcountries",
    city:"https://opticalerp.in:85/api/cascadecountrycitystate/getcities",
    state:"https://opticalerp.in:85/api/cascadecountrycitystate/getstates",
    occupation:"https://opticalerp.in:85/api/udc/getvaluesbytype?type=Occupation",

    //AddFollowUP screen 
    addFollowUP: "https://opticalerp.in:85/api/followupdetails/create/create",
    //add Task screen API
    addTask:"https://opticalerp.in:85/api/taskdetails/create",
   upComingTask: "https://opticalerp.in:85/api/taskdetails/getlist",
   leadDetail:"https://opticalerp.in:85/api/lead/getbyleadid",
   client:"https://opticalerp.in:85/api/client/getlist/get-all",
   clientDetail:"https://opticalerp.in:85/api/client/get/",
   leadLast : "https://opticalerp.in:85/api/lead/create/create",
   // UpcomingMeetingsList:"https://opticalerp.in:85/api/lead/getlist/get-all"

}
