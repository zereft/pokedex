import { configureStore } from "@reduxjs/toolkit"

import configReducer from "../features/config/configSlice"
import pokemonReducer from "../features/pokemon/pokemonSlice"
import teamReducer from "../features/team/teamSlice"

export const store = configureStore({
    reducer: {
        config: configReducer,
        pokemon: pokemonReducer,
        team: teamReducer,
    },
})