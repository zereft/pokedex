import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    team: []
}

export const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        addToTeam: (state,action) => {
            console.log(`add`);
        },
        removeFromTeam: (state, action) => {
            console.log(`remove`);
        },
        replaceInTeam: (state, action) => {
            console.log(`replace`);
        }
    }
});

export const { addToTeam, removeFromTeam, replaceInTeam} = teamSlice.actions;

export default teamSlice.reducer;