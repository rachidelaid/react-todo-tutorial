const TodoItem = ({ data, deleteTodo, updateTodo }) => {
  const handleDelete = () => {
    deleteTodo(data.id);
  };

  const handleUpdate = (e) => {
    if (e.target.className === 'check') {
      const todo = {
        ...data,
        completed: e.target.checked,
      };
      updateTodo(todo);
    } else {
      const todo = {
        ...data,
        description: e.target.value.trim(),
      };
      updateTodo(todo);
    }
  };

  const handleDoubleClick = (e) => {
    e.target.readOnly = false;
    e.target.focus();
  };

  const handleBlur = (e) => {
    e.target.readOnly = true;
  };

  return (
    <div className="todoItem">
      <div>
        <input
          className="check"
          type="checkbox"
          checked={data.completed}
          onChange={handleUpdate}
        />
        <input
          className="input"
          type="text"
          required
          readOnly
          value={data.description}
          onDoubleClick={handleDoubleClick}
          onBlur={handleBlur}
          onChange={handleUpdate}
        />
      </div>
      <svg viewBox="0 0 24 24" onClick={handleDelete}>
        <path
          fill="currentColor"
          d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z"
        />
      </svg>
    </div>
  );
};

export default TodoItem;
