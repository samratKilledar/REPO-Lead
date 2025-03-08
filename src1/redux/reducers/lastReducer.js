import { UPDATE_ASSIGNTO, UPDATE_SERVICES, UPDATE_REMARK } from "../actions/lastAction";

const initialState = {
  remark: "",
  assignto: [], 
  services: [],
};

const lastReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ASSIGNTO:
      return { ...state, assignto: action.payload };

    case UPDATE_SERVICES:
      return { ...state, services: action.payload };

    case UPDATE_REMARK:
      return { ...state, remark: action.payload };

    default:
      return state;
  }
};

export default lastReducer;