import { createSlice } from "@reduxjs/toolkit";
import db from '../db.json';

const questSlice = createSlice({
    name: 'quest',
    initialState: {
        quest: db,
        step: -1,
    },
    reducers: {
        updateStep: (state) => {
            state.step += 1
        },
        removeStap: (state) => {
            state.step = -1;
        }
    },
});

export default questSlice.reducer;

export const { updateStep } = questSlice.actions;
export const { removeStap } = questSlice.actions;