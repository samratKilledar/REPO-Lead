// AddserviceReducer.js
const initialState = {
    services: [], // Array to store fetched services
  };
  
  const AddserviceReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_SERVICES_REQUEST':
        return { ...state, servicesLoading: true, servicesError: null };
  
      case 'FETCH_SERVICES_SUCCESS':
        return { ...state, servicesLoading: false, services: action.payload };
  
      case 'FETCH_SERVICES_FAILURE':
        return { ...state, servicesLoading: false, servicesError: action.payload };
  
      default:
        return state;
    }
  };
  
  export default AddserviceReducer;