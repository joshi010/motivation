import { createSlice } from "@reduxjs/toolkit";
import { plans } from "./plans-info";

export const planSlice = createSlice({
    name: 'plans',
    initialState: {
        plans: plans,
    },
    reducers: {}
});


export const selectPlans = (state) => state.plans.plans;
export const filterPlans = (query, plans) => Object.values(plans).filter(plan => plan.title.toLowerCase().includes(query.toLowerCase()));
export default  planSlice.reducer;