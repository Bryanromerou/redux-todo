import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
    const allTodos = useSelector(state=>state.todos);
    const todoComponents = allTodos.map(elem=>{return <Todo todo={elem.label}/>})
    console.log(allTodos)
    return (
        <ul>
            {todoComponents}
        </ul>
    );
}

export default TodoList;
