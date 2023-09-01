import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedPokemonID : null,
    selectedOption: 'about' 
}   

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        selectPokemon: (state, action) => {
            state.selectedPokemonID = action.payload;
        },
        setOption: (state, action) => {
            state.selectedOption = action.payload;
        }
    }
})

export const { selectPokemon, setOption} = pokemonSlice.actions;
export default pokemonSlice.reducer;