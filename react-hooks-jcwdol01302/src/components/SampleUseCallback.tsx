import { useCallback, useState } from "react";
import Todos from "./Todos";

export default function SampleUseCallback() {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prevTodos: string[]) => [...prevTodos, "New Todo"]);
  }, []);

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr></hr>
      <div>
        Count : {count}
        <button onClick={increment}> + </button>
      </div>
    </div>
  );
}
