import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

export const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        add: (state) => {
            console.log(`add pokemon : ${state.value}`);
        },
        remove: (state) => {
            console.log(`remove pokemon : ${state.value}`);
        },
        change: (state) => {
            console.log(`change pokemon : ${state.value}`);
        }
    }
});

export const { add, remove, change} = teamSlice.actions;

export default teamSlice.reducer;