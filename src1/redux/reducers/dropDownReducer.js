const initialState = {
  priorityList: [],
  selectedPriority: null,
  error: null,
};

const dropDownReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRIORITY_SUCCESS":
      console.log("Priority List Updated:", action.payload); // Debugging log
      return { ...state, priorityList: action.payload, error: null };

    case "FETCH_PRIORITY_FAILURE":
      return { ...state, error: action.payload };

    case "CHANGE_PRIORITY":
      return { ...state, selectedPriority: action.payload };

    default:
      return state;
  }
};

export default dropDownReducer;
