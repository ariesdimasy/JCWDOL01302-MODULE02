import { Box, Flex, Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Box borderWidth="1px" bgColor={"skyblue"} height={"50px"} w={"100%"}>
        <Container
          maxW={"container.xl"}
          height={"100%"}
          lineHeight={"50px"}
          borderWidth={1}
        >
          <Flex flexDirection={"row"} gap={0} w={"100%"}>
            <Box
              border={"1px solid blue"}
              height={50}
              w={"20%"}
              lineHeight={"50px"}
            ></Box>
            <Box
              border={"1px solid red"}
              height={50}
              w={"80%"}
              lineHeight={"50px"}
            ></Box>
          </Flex>
        </Container>
      </Box>
      <Box bgColor={"blue.300"} height={300}>
        <Container
          maxW={"container.xl"}
          height={"100%"}
          lineHeight={"50px"}
          borderWidth={1}
        ></Container>
      </Box>
    </div>
  );
}
