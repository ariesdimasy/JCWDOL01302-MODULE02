import { Box } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      bgColor={"blue.500"}
      height={"50px"}
      lineHeight={"50px"}
      display={"flex"}
      flexDirection={"row"}
      w={"100%"}
    >
      <div style={{ width: "20%" }}></div>
      <div style={{ width: "80%" }}>
        <ul
          style={{
            textDecoration: "none",
            listStyleType: "none",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            color: "white",
          }}
        >
          <li className="px-10">
            {" "}
            <a href="/"> Home </a>
          </li>
          <li className="px-10">
            <a href="/todos">Todo</a>
          </li>
          <li className="px-10">
            <a href="/users">Users</a>
          </li>
        </ul>
      </div>
    </Box>
  );
}
