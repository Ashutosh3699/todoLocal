import { createContext, useContext } from "react";


export const TodoContext= createContext({

    todos: [
        {
            id: 1,
            todo:"learn dsa",
            complete: false
        }
    ],
    addTodo : (todo)=>{},
    delTodo: (id)=>{},
    updateTodo: (id,todo)=>{},
    toggleComplete: (id) =>{}

})

export const TodoContextProvider = TodoContext.Provider;

export default function  useTodo(){

    return useContext(TodoContext);
}


