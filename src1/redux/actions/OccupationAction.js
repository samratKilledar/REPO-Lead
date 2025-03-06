export const UPDATE_OCCUPATION = "UPDATE_OCCUPATION";
export const UPDATE_TYPE_OF_WORK = "UPDATE_TYPE_OF_WORK";
export const UPDATE_MONTHLY_INCOME = "UPDATE_MONTHLY_INCOME";

export const updateOccupation = (occupation) => ({
  type: "UPDATE_OCCUPATION",
  payload: occupation,
});

export const updateTypeOfWork = (typeOfWork) => ({
  type: "UPDATE_TYPE_OF_WORK",
  payload: typeOfWork,
});

export const updateMonthlyIncome = (monthlyIncome) => ({
  type: "UPDATE_MONTHLY_INCOME",
  payload: monthlyIncome,
});

