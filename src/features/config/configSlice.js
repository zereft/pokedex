import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    setTheme: 'init',
    trainerID: false,
    preload: false,
    openMessageV1: false,
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
        },
        openMessage: (state, action) => {
            state.openMessageV1 = action.payload;
        }
    }
})

export const { selectTheme, login, loading, openMessage } = configSlice.actions;
export default configSlice.reducer;