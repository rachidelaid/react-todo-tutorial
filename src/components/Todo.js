import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import SideBar from './SideBar';
import { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos'))
      ? JSON.parse(localStorage.getItem('todos'))
      : [],
  );

  const addTodos = (todo) => {
    localStorage.setItem('todos', JSON.stringify([...todos, todo]));
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    const arr = todos.filter((t) => t.id !== id);
    localStorage.setItem('todos', JSON.stringify(arr));
    setTodos(arr);
  };

  const updateTodo = (todo) => {
    const arr = todos.map((t) => {
      if (t.id === todo.id) return todo;
      return t;
    });
    console.log(arr, todo);
    localStorage.setItem('todos', JSON.stringify(arr));
    setTodos(arr);
  };

  return (
    <main>
      <SideBar />
      <h1>Todos</h1>
      <TodoInput addTodos={addTodos} />
      {todos.map((x, i) => (
        <TodoItem
          data={x}
          key={i}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </main>
  );
};

export default Todo;
