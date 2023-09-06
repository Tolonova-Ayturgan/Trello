import { configureStore } from "@reduxjs/toolkit";
import { todoRegistrations } from "./slicces/RegistrTodo";


export const store = configureStore({
    reducer: {
        todoRegistrations: todoRegistrations.reducer,
    },
});