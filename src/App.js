import React, { useState } from 'react';
import './App.css';

const Todo = ({ todo, index }) => {
  return <div className="todo">{todo.text}</div>;
};

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Learn React Hooks',
      isComplete: false
    },
    {
      text: 'Learn Golang',
      isComplete: false
    },
    {
      text: 'Create some cool projects',
      isComplete: false
    }
  ]);
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default App;
