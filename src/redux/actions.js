import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionTypes';
const ADD_COUNTER = "ADD_COUNTER";
const SUBTRACT_COUNTER = "SUBTRACT_COUNTER";

// let initialState = {
let nextTodoId = 0;
    // counter:0,
// }

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
});


export const addCounter = content =>({
    type: ADD_COUNTER,
});