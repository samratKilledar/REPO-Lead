const initialState = {
  statusList: [],
  selectedStatus: null,
  error: null,
};

const dropDownReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STATUS_SUCCESS":
      console.log("Status List Updated:", action.payload); // Debugging log
      return { ...state, statusList: action.payload, error: null };

    case "FETCH_STATUS_FAILURE":
      return { ...state, error: action.payload };

    case "CHANGE_STATUS":
      return { ...state, selectedStatus: action.payload };

    default:
      return state;
  }
};

export default dropDownReducer;
