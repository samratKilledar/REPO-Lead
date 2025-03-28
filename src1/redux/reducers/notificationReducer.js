
// const initialState = {
//   notifyData:{todayNotifications: [
//     { name: "Jacob Jones", message: "Leave a comment on the ", app: "Tiki App" },
//     { name: "Jenny Wilson", message: "Adding a task to the ", app: "3D Design" },
//     { name: "Wade Warren", message: "Have been invited to the project", app: "" },
//   ],
//   yesterdayNotifications: [
//     { name: "Guy Hawkins", message: "Adding a task to the ", app: "NFT App" },
//     { name: "Kathryn Murphy", message: "Have been invited to the project", app: "" },
//     { name: "Eleanor Pena", message: "Leave a comment on the ", app: "Job App" },
//   ],
//   dateNotifications: [
//     { name: "Marvin McKinney", message: "Have been invited to the project", app: "" },
//     { name: "Dianne Russell", message: "Leave a comment on the ", app: "Tiki App" },
//   ],}
// };

// const notificationsReducer = (state = initialState, action) => {
//   return state;
// };

// export default notificationsReducer;


const initialState = {
  notifyData:[
  {
  date:"",
  nameplaceholder: "",
  message:"",
  app: "",
  },
  {
    date:"",
    nameplaceholder: "",
    message:"",
    app: "",
    },
    {
      date:"",
      nameplaceholder: "",
      message:"",
      app: "",
      }
]
}

const notificationsReducer = (state = initialState, action) => {
  switch(action)
  {
    case "notifyData":
      return{
        ...state,
        data: action.payload,
        namep: action.payload,
        message: action.apyload,
        app: action.payload,
      }
  }
  

}