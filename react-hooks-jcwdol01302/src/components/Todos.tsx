import { memo } from "react";

interface ITodos {
  todos: string[];
  addTodo: () => void;
}

function Todos(props: ITodos) {
  const { todos, addTodo } = props;

  console.log("child render");

  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo: string, index: number) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}> Add Todo</button>
    </div>
  );
}

export default memo(Todos);
