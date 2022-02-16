const TodoInput = () => {
  return (
    <form className="todoInput">
      <input className="input" type="text" required />
      <button type="submit">
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
          />
        </svg>
      </button>
    </form>
  );
};

export default TodoInput;
