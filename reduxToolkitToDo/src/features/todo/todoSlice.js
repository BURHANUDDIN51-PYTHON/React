import {createSlice, nanoid} from '@reduxjs/toolkit';

// Create an intial state object
const initialState = {
    todos: [{
        id: 1, text: "Hello, world"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // Here you will provide all the variables and the functions
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

// Exporting the functions for future use in components
export const {addTodo, removeTodo} = todoSlice.actions;

// Exporting the reducer to use it in the store and to aware the store about the user
export const todoReducers = todoSlice.reducer;