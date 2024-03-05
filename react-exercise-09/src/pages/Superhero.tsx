import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Container,
  OrderedList,
  ListItem,
  Divider,
} from "@chakra-ui/react";

import SuperheroForm from "../components/SuperheroForm";

export default function Superhero() {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    // axios.get("http://localhost:4500/superheroes").then((res) => {
    //   setSuperheroes(res.data);
    // });
    handleGetSuperheroes();
  }, []);

  const handleGetSuperheroes = async () => {
    try {
      const res = await axios.get("http://localhost:4500/superheroes");
      setSuperheroes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Box w={"100%"} height={{ width: "100vh" }}>
        <Container>
          <h1 className="text-2xl text-center"> Superheroes </h1>
          <hr></hr>

          <OrderedList>
            {superheroes.map(
              (item: {
                id: number;
                name: string;
                color: string;
                superpower: string;
              }) => {
                return (
                  <ListItem key={item.id} className="h-10">
                    <a href={`/superhero/${item.id}`}>
                      {item?.name} - {item?.superpower}
                    </a>
                    <Divider></Divider>
                  </ListItem>
                );
              }
            )}
          </OrderedList>
        </Container>
        <Divider />
        <SuperheroForm handleGetSuperheroes={handleGetSuperheroes} />
      </Box>
    </div>
  );
}
