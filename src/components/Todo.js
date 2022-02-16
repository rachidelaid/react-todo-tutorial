import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import SideBar from './SideBar';

const Todo = () => {
  const todos = [
    {
      description: 'test 1',
      completed: false,
    },
    {
      description: 'test 2',
      completed: false,
    },
    {
      description: 'test 3',
      completed: false,
    },
  ];

  return (
    <main>
      <SideBar />
      <h1>Todos</h1>
      <TodoInput />
      {todos.map((x) => (
        <TodoItem />
      ))}
    </main>
  );
};

export default Todo;
