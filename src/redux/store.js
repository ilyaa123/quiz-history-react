import { configureStore } from "@reduxjs/toolkit";
import questRedusers from "./questSlice";

export const store = configureStore({
    reducer: {
        quest: questRedusers
    }
});
