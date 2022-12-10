import { createSlice } from "@reduxjs/toolkit";
import db from '../db.json';

const questSlice = createSlice({
    name: 'quest',
    initialState: {
        user: localStorage.getItem('user') || '',
        quest: db,
        step: -1,
        answers: []
    },
    reducers: {
        updateStep: (state) => {
            state.step = state.answers.length
        },
        removeStap: (state) => {
            state.step = -1;
            state.answers = [];
        },
        setStap: (state, action) => {
            state.step = action.payload
        },
        shaffleQuest: (state) => {
            let currentIndex = state.quest.length;
            let randomIndex;
            
            let newArray = [...state.quest]

            while (currentIndex !== 0) {
            
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
          
                [newArray[currentIndex], newArray[randomIndex]] = [
                newArray[randomIndex], newArray[currentIndex]];
            }
            state.quest = newArray
            
        },
        setAnswers: (state, action) => {
            state.answers[state.step] = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', action.payload)
        }
    },
});

export default questSlice.reducer;

export const { updateStep } = questSlice.actions;
export const { removeStap } = questSlice.actions;
export const { shaffleQuest } = questSlice.actions;
export const { setAnswers } = questSlice.actions;
export const { setUser } = questSlice.actions;
export const { setStap } = questSlice.actions;