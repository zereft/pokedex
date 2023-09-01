import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    setTheme: 'init',
    trainerID: false,
    preload: false,
}

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        selectTheme: (state, action) => {
            state.setTheme = action.payload;
        },
        login: (state, action) => {
            state.trainerID = action.payload;
        },
        loading: (state, action) => {
            state.preload = action.payload;
        }
    }
})

export const { selectTheme, login, loading } = configSlice.actions;
export default configSlice.reducer;