export const api={
    authApi:"https://opticalerp.in:85/api/tokens/gettoken",
    refreshApi : "https://opticalerp.in:85/api/tokens/refresh/refresh",
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
    taskList:"https://opticalerp.in:85/api/taskdetails/getlist",
    assignTo : "https://opticalerp.in:85/api/lead/getdropdowndata/getdropdowndata",
    particularLeadDetailApi:"https://opticalerp.in:85/api/lead/getbyleadid",

    //AddFollowUP screen 
    addFollowUp: "https://opticalerp.in:85/api/followupdetails/createupdatefollowup?Id=0&FollowupType=Lead&FollowupTypeId=5&Title=Meeting%20follow%20up&FollowupStatus=15&AssignedTo=3&FollowupDate=3%2F22%2F2025&FollowupTime=3%2F21%2F2025%206%3A00%3A00%20PM&AttachmentUrl=https%3A%2F%2Flocalhost%3A44333%2FFiles%2FFollowup%2FFollowupDetails%2FExperienceLetterFormat.docx&Remark=Meeting%20scheduled%20at%2006%3A00%20PM&IsActive=true",
    //add Task screen API
    addTask:"https://opticalerp.in:85/api/taskdetails/create",
   upComingTask: "https://opticalerp.in:85/api/taskdetails/getlist",
   leadDetail:"https://opticalerp.in:85/api/lead/getbyleadid",
   client:"https://opticalerp.in:85/api/client/getlist/get-all",
   clientDetail:"https://opticalerp.in:85/api/client/get/",
   // UpcomingMeetingsList:"https://opticalerp.in:85/api/lead/getlist/get-all"


   leadSubmit:"https://opticalerp.in:85/api/lead/insertupdateleaddetails/create-update",
   leadDetailBarbara: "https://opticalerp.in:85/api/lead/getbyleadid/1",
   clientDetailBarbara: "https://opticalerp.in:85/api/client/getbyclientid/1",
   
}

