import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email : "aytu@gmail.com",
    password: 123456,
    email: false,
    password: false
}

export const todoRegistrations = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      addTodo: (state, action) => {
        const newTodo = {
          id: Date.now().toString(),
          text: action.payload,
          completed: false,
        };
        // state.push(newTodo);
      },
      deleteTodo: (state, action) => {
          state.text.filter((el) => el.id !== action.id)
      }
    },
  });
  
  export const { addTodo, deleteTodo } = todoRegistrations.actions;
  export default todoRegistrations.reducer;
  