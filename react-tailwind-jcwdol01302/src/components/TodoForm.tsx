import { useState } from "react";
import { Button, Input } from "@chakra-ui/react";

import ITodo from "../interfaces/ITodo";

interface ITodoForm {
  done: number;
  setTodos: Function;
  todos: ITodo[];
}

export default function TodoForm(props: ITodoForm) {
  const { done, setTodos, todos } = props;
  const [todoTitle, setTodoTitle] = useState<string>("");

  const handleAddTodo = () => {
    const newTodo: ITodo = {
      id: 10,
      title: todoTitle,
      done: false,
    };

    alert(JSON.stringify(todos));
    setTodos([...todos, newTodo]);
    setTodoTitle("");
  };

  return (
    <div className="mx-auto w-3/6 my-14">
      <h1 className="text-2xl text-center text-white"> Done : {done}</h1>
      <Input
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        placeholder="Add Todo"
        className="my-5"
      />
      {todoTitle}
      <Button colorScheme="green" onClick={() => handleAddTodo()}>
        {" "}
        Add Todo{" "}
      </Button>
    </div>
  );
}
