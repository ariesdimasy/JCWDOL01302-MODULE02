import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Container } from "@chakra-ui/react";

import Navbar from "../components/Navbar";

export default function Superhero() {
  const [superhero, setSuperhero] = useState<
    | { id: number; name: string; color: string; superpower: string }
    | null
    | undefined
  >();
  const params = useParams();

  useEffect(() => {
    // axios.get("http://localhost:4500/superheroes").then((res) => {
    //   setSuperheroes(res.data);
    // });
    handleGetSuperheroes();
  }, []);

  const handleGetSuperheroes = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4500/superheroes/?id=${params.id}`
      );
      setSuperhero(res.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <Box w={"100%"} height={{ width: "100vh" }}>
        <Container>
          <h1 className="text-2xl text-center">
            {" "}
            Superhero : {superhero?.name}{" "}
          </h1>
          <hr></hr>
          <div>{JSON.stringify(superhero)}</div>
        </Container>
      </Box>
    </div>
  );
}
