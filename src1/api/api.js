export const api={
    authApi:"https://opticalerp.in:85/api/tokens/gettoken",
    forgotPasswordApi:"https://opticalerp.in:85/api/users/forgotpassword/forgot-password",
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
}