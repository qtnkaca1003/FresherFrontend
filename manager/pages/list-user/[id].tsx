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
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import apiUser from "../../api/User";
import ButtonPagin from "../../components/pagin";
import CSearch from "../../components/search";
import { TUser } from "../../components/table/TUser";
import dataUser from "../../datauser.json";
import { IUser } from "../../types/interface";
interface IProps {
  users: IUser[];
  status: number;
}
const ListUser = ({ users, status }: IProps) => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const toAddUser = () => {
    router.push("/list-user/add-user");
  };
  const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const filteredUsers = users.filter((item) => {
    const query = search.toLowerCase();
    return (
      item.name.firstname.toLowerCase().indexOf(query) >= 0 ||
      item.name.lastname.toLowerCase().indexOf(query) >= 0 ||
      item.address.city.toLowerCase().indexOf(query) >= 0 ||
      item.address.street.toLowerCase().indexOf(query) >= 0
    );
  });
  return (
    <>
      <Box padding={"0 24px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          padding={"24px 0"}
        >
          {" "}
          <Box>
            <Text color={"#3d5170"} fontSize="3xl" fontWeight={"600"}>
              {" "}
              List User
            </Text>
            <CSearch
              onChange={handelChange}
              placeholder="Saech for something..."
            />
          </Box>
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
                  data={dataUser}
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
                  <Th p={"12px"} textTransform={"none"} fontSize={"16px"}></Th>
                </Tr>
              </Thead>
              <Tbody>
                {status == 200 ? (
                  filteredUsers.length == 0 ? (
                    <>Not found</>
                  ) : (
                    filteredUsers.map((item: IUser, index) => {
                      return (
                        <Tr key={index}>
                          <TUser user={item} />
                        </Tr>
                      );
                    })
                  )
                ) : (
                  <>Erorr</>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};
export default ListUser;
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page: string | string[] | number = query.id || 1;
  const data = await (await apiUser.getAll()).data;
  const itemPerPage = 5;
  const currenPage = Number(page);
  const indexOfLastItem = currenPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = data.slice(indexOfFirstItem, indexOfLastItem);
  //console.log(currentItem);

  return {
    props: {
      users: currentItem,
      status: (data.status = "200"),
    },
  };
};
