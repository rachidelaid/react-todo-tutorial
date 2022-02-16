import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import SideBar from './SideBar';
import { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [],
  );

  const addTodos = (todo) => {
    localStorage.setItem('todos', JSON.stringify([...todos, todo]));
    setTodos([...todos, todo]);
  };

  return (
    <main>
      <SideBar />
      <h1>Todos</h1>
      <TodoInput addTodos={addTodos} />
      {todos.map((x, i) => (
        <TodoItem data={x} key={i} />
      ))}
    </main>
  );
};

export default Todo;
