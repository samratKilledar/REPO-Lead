import { createAsyncThunk } from "@reduxjs/toolkit";

// Async action for submitting the lead data to an API
export const addLead = createAsyncThunk("lead/addLead", async (leadData, { rejectWithValue }) => {
  try {
    const response = await fetch("https://opticalerp.in:85/swagger/index.html#/Lead/Lead_Create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit lead");
    }
    return await response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Action for saving services data locally before submission
export const saveServicesData = (data) => ({
  type: "lead/saveServicesData",
  payload: data,
});
