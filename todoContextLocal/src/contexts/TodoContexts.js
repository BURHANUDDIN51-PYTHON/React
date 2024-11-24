import { createContext, useContext } from "react";

export const TodoContext = createContext({ 
    /* Function Require 
        1. add a todo
        2. edit a todo
        3. Strike through a todo (toggle)
        4. delete a todo 
        5. the todo itself
        6. the id of the todo
        7. Update a todo */  

    todos: [
        {
            id: 1,
            todo: 'Todo message',
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext);
}

// Provding provider
export const TodoProvider = TodoContext.Provider