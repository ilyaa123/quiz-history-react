import { createSlice } from "@reduxjs/toolkit";
import db from '../db.json';

const questSlice = createSlice({
    name: 'quest',
    initialState: {
        user: localStorage.getItem('user') || '',
        quest: db,
        step: -1,
        answersTrue: 0
    },
    reducers: {
        updateStep: (state) => {
            state.step += 1
        },
        removeStap: (state) => {
            state.step = -1;
            state.answersTrue = 0;
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
        setAnswersTrue: (state) => {
            state.answersTrue += 1
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
export const { setAnswersTrue } = questSlice.actions;
export const { setUser } = questSlice.actions;