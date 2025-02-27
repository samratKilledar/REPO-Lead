// Action Types
export const UPDATE_OCCUPATION = "UPDATE_OCCUPATION";
export const UPDATE_TYPE_OF_WORK = "UPDATE_TYPE_OF_WORK";
export const UPDATE_MONTHLY_INCOME = "UPDATE_MONTHLY_INCOME";


// Action Creators

// Update selected occupation
export const updateOccupation = (occupation) => ({
  type: UPDATE_OCCUPATION,
  payload: occupation,
});

// Update type of work
export const updateTypeOfWork = (typeOfWork) => ({
  type: UPDATE_TYPE_OF_WORK,
  payload: typeOfWork,
});

// Update monthly income
export const updateMonthlyIncome = (monthlyIncome) => ({
  type: UPDATE_MONTHLY_INCOME,
  payload: monthlyIncome,
});
