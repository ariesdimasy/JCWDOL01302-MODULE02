import { useEffect } from "react";

import {
  Heading,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
} from "@chakra-ui/react";
import type { RootState } from "../app/store";

import { useSelector, useDispatch } from "react-redux";
import { fetchAllUser } from "../app/features/userSlice";

export default function User() {
  const users = useSelector((state: RootState) => state.userSlice.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUser());
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Heading textAlign={"center"} my={"20px"}>
        User List{" "}
        <Button as={"a"} href="/register" colorScheme="teal">
          {" "}
          register
        </Button>
      </Heading>
      <TableContainer w={"70%"} m={"auto"}>
        <Table variant="striped" colorScheme="grey">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead bgColor={"blue.500"}>
            <Tr>
              <Th color={"white"}>ID</Th>
              <Th color={"white"}>Name</Th>
              <Th color={"white"}>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map(
              (item: { id: number; name: string; email: string }, index) => (
                <Tr key={index}>
                  <Td>{item.id}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.email}</Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
