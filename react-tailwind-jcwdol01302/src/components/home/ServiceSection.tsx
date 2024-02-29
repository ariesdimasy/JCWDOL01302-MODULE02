import { Box, Heading } from "@chakra-ui/react";
import ServiceCard from "./../ServiceCard";

export default function ServiceSection() {
  return (
    <Box padding={"0 0 40px 0"} border={"1px solid black"} w={"100%"}>
      <div className="container">
        <Heading textAlign={"center"} padding={"20px 0"}>
          {" "}
          Service
        </Heading>
        <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </Box>
  );
}
