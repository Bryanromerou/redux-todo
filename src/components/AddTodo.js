import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AddTodo = (props) => {
    const [input, setInput] = useState("");
    const allTodos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const textHandler = (e)=>{
        // setInput();
        setInput(e.target.value)
        console.log(input)
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("form submitted")
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch({
        type: 'ADD_TODO',
        payload: {
            label: input,
            id: Math.ceil(Math.random()*100)
        }
        })
        setInput("");
    }

    return (
        <div>
            <form onSubmit ={handleClick}>
                <input type="text" value = {input} onChange={textHandler}/>
                {/* <button onClick={submitHandler}>Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default AddTodo;
