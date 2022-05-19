import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { TUser } from "../components/table/TUser";
import { useAppDispatch, useAppSelector } from "../hook";
import { addNewUser } from "../redux/slices/userSlices";
import { IUser } from "../types/interface";

const ListUser = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getProduct = () => {
      axios.get("https://fakestoreapi.com/users?limit=5").then((res) => {
        dispatch(addNewUser(res.data));
      });
    };
    getProduct();
  }, [dispatch]);
  const listUsers = useAppSelector((state) => state.users.postUser);
  const users: IUser[] = Object.assign([], ...listUsers);
  return (
    <>
      <Box padding={"0 24px"}>
        <Box padding={"24px 0"}>
          <Text color={"#3d5170"} fontSize="3xl" fontWeight={"600"}>
            {" "}
            List User
          </Text>
        </Box>
        <Box shadow={"2xl"} borderRadius={"10px"} padding={"24px 0"}>
          <TableContainer>
            <Table variant="simple">
              <TableCaption></TableCaption>
              <Thead>
                <Tr>
                  <Th p={"12px"} textTransform={"none"} fontSize={"16px"}>
                    User
                  </Th>
                </Tr>
              </Thead>
              <Thead fontSize={"15px"} background={"#f5f6f8"}>
                <Tr h={"47px"}>
                  <Th p={"12px"} textTransform={"none"} fontSize={"16px"}>
                    #
                  </Th>
                  <Th p={"12px"} textTransform={"none"} fontSize={"16px"}>
                    First Name
                  </Th>
                  <Th p={"12px"} textTransform={"none"} fontSize={"16px"}>
                    Last Name
                  </Th>
                  <Th p={"12px"} textTransform={"none"} fontSize={"16px"}>
                    City
                  </Th>
                  <Th p={"12px"} textTransform={"none"} fontSize={"16px"}>
                    Street
                  </Th>
                  <Th p={"12px"} textTransform={"none"} fontSize={"16px"}>
                    Zip-Code
                  </Th>
                  <Th p={"12px"} textTransform={"none"} fontSize={"16px"}>
                    Phone
                  </Th>
                  <Th p={"12px"} textTransform={"none"} fontSize={"16px"}></Th>
                  <Th p={"12px"} textTransform={"none"} fontSize={"16px"}></Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map((item: IUser, index) => {
                  return (
                    <Tr key={index}>
                      <TUser user={item} />
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};
export default ListUser;
