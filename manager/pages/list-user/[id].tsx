import {
  Box,
  Button,
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
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import apiUser from "../../api/User";
import ButtonPagin from "../../components/pagin";
import { TUser } from "../../components/table/TUser";
import data from "../../datauser.json";
import { useAppDispatch, useAppSelector } from "../../hook";
import { addNewUser } from "../../redux/slices/userSlices";
import { IUser } from "../../types/interface";

const ListUser = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const id: string | undefined = router.query.id?.toString();
  const toAddUser = () => {
    router.push("/add-user");
  };
  useEffect(() => {
    const getProduct = () => {
      apiUser.getPage(id).then((res) => {
        dispatch(addNewUser(res.data.data));
      });
      
    };
    getProduct();
  }, [id, dispatch]);
  const listUsers = useAppSelector((state) => state.users.propsUsers);
  const users: IUser[] = Object.assign([], ...listUsers);
  return (
    <>
      <Box padding={"0 24px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          padding={"24px 0"}
        >
          <Text color={"#3d5170"} fontSize="3xl" fontWeight={"600"}>
            {" "}
            List User
          </Text>
          <Button colorScheme={"blue"} onClick={toAddUser}>
            {" "}
            + Add User
          </Button>
        </Box>
        <Box shadow={"2xl"} borderRadius={"10px"} padding={"24px 0"}>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>
                <ButtonPagin
                  itemPage={5}
                  maxPageNumerLitmit={3}
                  path="/list-user/"
                  pageNumerLitmit={3}
                  data={data}
                />
              </TableCaption>
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
