import { useState, useEffect } from "react";

import {
  Box,
  OrderedList,
  ListItem,
  Divider,
  Container,
} from "@chakra-ui/react";

export default function Todos() {
  const [todos, setTodos] = useState<[]>([]);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos", {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setTodos(json);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    handleGetTodos();
  }, []);

  const handleGetTodos = async () => {
    try {
      const todosData = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "GET",
        }
      );

      const todosJson = await todosData.json();

      setTodos(todosJson);
    } catch (err) {
      alert(JSON.stringify(err));
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Box w={"100%"} height={{ width: "100vh" }}>
        <Container>
          <h1 className="text-2xl text-center"> Todo </h1>
          <hr></hr>

          <OrderedList>
            {todos.map(
              (item: {
                id: number;
                userId: number;
                title: string;
                completed: boolean;
              }) => {
                return (
                  <ListItem className="h-10">
                    {item?.title} - completed :{" "}
                    {JSON.stringify(item?.completed)}
                    <Divider></Divider>
                  </ListItem>
                );
              }
            )}
          </OrderedList>
        </Container>
      </Box>
    </div>
  );
}
