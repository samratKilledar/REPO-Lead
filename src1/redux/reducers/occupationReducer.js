const initialState = {
    occupation: null,
    typeOfWork: "",
    monthlyIncome: "",
  };
  
  const occupationReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_OCCUPATION":
        return { ...state, occupation: action.payload };
  
      case "UPDATE_TYPE_OF_WORK":
        return { ...state, typeOfWork: action.payload };
  
      case "UPDATE_MONTHLY_INCOME":
        return { ...state, monthlyIncome: action.payload };
  
      default:
        return state;
    }
  };
  
export default occupationReducer;
  