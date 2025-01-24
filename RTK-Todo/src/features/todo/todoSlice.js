import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ todo: 1, text: "Hello World" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer
// --> yeh store me humara reducer register kre ga, taky isko pta ho k value kaha kaha se arahi hai aur store ko bhi awareness chahiye sb reducers ki.


//? state: -> yeh hume btaye ga k abhi humari state kya hai.

//? action: -> yeh hume value provide krta hai, let's suppose, humara aik todo hai, usko id ki zarurat hoti hai, to yeh id hume action provide kre ga.

//? state aur action hume humasha mile ga, yeh iska syntax hai, aur iska access humasha mile ga.