import { useState, useEffect } from "react";
import { Button, Checkbox } from "@chakra-ui/react";

import TodoForm from "../components/TodoForm";

import ITodo from "../interfaces/ITodo";

export default function Todo() {
  const [done, setDone] = useState<number>(0);
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleCheck = () => {};

  useEffect(() => {
    setTodos([
      {
        id: 1,
        title: "code exercise java selama 1 jam",
        done: false,
      },
    ]);
  }, []);

  return (
    <div className="bg-blue-500 h-screen p-10">
      <h1 className="text-3xl text-center text-white my-10">
        {" "}
        Chores Todo List{" "}
      </h1>
      <ul className="mx-auto w-3/6">
        {todos.map((item: ITodo, index: number) => (
          <li className="text-xl" key={index}>
            <Checkbox
              size={"lg"}
              colorScheme={"green"}
              onChange={() => handleCheck()}
            >
              <div className="w-full">{item.title}</div>
            </Checkbox>
            <Button colorScheme="red">Delete</Button>
          </li>
        ))}
      </ul>
      <TodoForm todos={todos} done={done} setTodos={setTodos} />
    </div>
  );
}
