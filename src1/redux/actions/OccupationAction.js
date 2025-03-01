// // Action Types
// export const UPDATE_OCCUPATION = "UPDATE_OCCUPATION";
// export const UPDATE_TYPE_OF_WORK = "UPDATE_TYPE_OF_WORK";
// export const UPDATE_MONTHLY_INCOME = "UPDATE_MONTHLY_INCOME";


// import { UPDATE_OCCUPATION } from "./actionTypes"; // Action Types

// // API Call to Fetch Dropdown Options
// export const fetchOccupations = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get("https://opticalerp.in:85/api/udc/getvaluesbytype?type=Occupation");
//       const data = response.data; // Assuming API returns array of occupations
//       dispatch(updateOccupation(data)); // Dispatch action with fetched data
//     } catch (error) {
//       console.error("Failed to fetch occupations:", error);
//     }
//   };
// };

// // Action Creator
// export const updateOccupation = (occupation) => ({
//   type: UPDATE_OCCUPATION,
//   payload: occupation,
// });

// // Update type of work
// export const updateTypeOfWork = (data) => ({
//   type: UPDATE_TYPE_OF_WORK,
//   payload: typeOfWork,
// });

// // Update monthly income
// export const updateMonthlyIncome = (data) => ({
//   type: UPDATE_MONTHLY_INCOME,
//   payload: monthlyIncome,
// });

//NEW CODE 

export const UPDATE_OCCUPATION = "UPDATE_OCCUPATION";
export const UPDATE_TYPE_OF_WORK = "UPDATE_TYPE_OF_WORK";
export const UPDATE_MONTHLY_INCOME = "UPDATE_MONTHLY_INCOME";

// API Call to Fetch Dropdown Options without Axios
// export const fetchOccupations = () => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch("https://opticalerp.in:85/api/udc/getvaluesbytype?type=Occupation");
//       if (!response.ok) {
//         throw new Error("Failed to fetch occupations");
//       }
//       const data = await response.json(); // Assuming API returns array of occupations
//       dispatch(updateOccupation(data)); // Dispatch action with fetched data
//     } catch (error) {
//       console.error("Failed to fetch occupations:", error);
//     }
//   };
// };

// Action Creator for Occupation
export const updateOccupation = (occupation) => ({
  type: "UPDATE_OCCUPATION",
  payload: occupation,
});

// Update type of work
export const updateTypeOfWork = (typeOfWork) => ({
  type: "UPDATE_TYPE_OF_WORK",
  payload: typeOfWork,
});

// Update monthly income
export const updateMonthlyIncome = (monthlyIncome) => ({
  type: "UPDATE_MONTHLY_INCOME",
  payload: monthlyIncome,
});

