import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{
        id: 1,
        text: 'Hello Ahmad!'
    }]
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
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer

// --> yeh store me humara reducer register kre ga, taky isko pta ho k value kaha kaha se arahi hai aur store ko bhi awareness chahiye sb reducers ki.


//? state: -> yeh hume btaye ga k abhi humari state kya hai.

//! action: -> yeh hume value provide krta hai, let's suppose, humara aik todo hai, usko id ki zarurat hoti hai, to yeh id hume action provide kre ga.

//? state aur action hume humasha mile ga, yeh iska syntax hai, aur iska access humasha mile ga.

//! Redux apne ap me aik independent library hai. isme aik line bohut popular huyi thi, "You should never modify your state" aur changes jo bhi hon woh functions, jinhain REDUCERS bhi kehte hain k through hi hone chahiye

//? Redux Toolkit: -> store bnany ka easy tarika milta hai pehle kafi mushkil tha. Uska copy paste snippet me rakhna prta tha. --- Built in Middleware --- Slicing new concept --- managing reducers

//? Store: -> aik container keh skte hain, jaha se hm data access kr skte hain, for example Global variables

//? Reducers: -> Yeh aik functionality hai,Store me hume kuch bhi change krna hai woh reducers k zariye hi hoga. Yeh sirf aik object hai aur kuch nai hai.

//? useSelector: -> use hota hai jb hume koi value select krni hai "Store" me sy.

//? useDispatch: -> use hota hai jb hume koi value bhejni hai, dispatch krni hai.