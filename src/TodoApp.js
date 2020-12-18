import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function TodoApp() {
  return (
    <div className="App">
      <h1>To do List!</h1>
      <AddTodo/>
      <TodoList/>
    </div>
  );
}

export default TodoApp;
