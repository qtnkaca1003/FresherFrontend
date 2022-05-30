import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IPage, IProduct, IUser } from "../../../types/interface";
import Pagination from "../buttonpagin";
interface IProps {
  filteredUsers: IUser[];
  status: number;
  data: IPage ;
}
const TUser = (props: IProps) => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>
             <Pagination
              itemPage={5}
              maxPageNumerLitmit={3}
              path="/list-user/"
              pageNumerLitmit={3}
              data={props.data}
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
                Email
              </Th>
             
              <Th p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.status == 200 ? (
              props.filteredUsers?.length == 0 ? (
                <>Not found</>
              ) : (
                props.filteredUsers?.map((item: IUser, index) => {
                  return (
                    <Tr key={index}>
                      <Td p={"12px"}>{item.id}</Td>
                      <Td p={"12px"}>{item.first_name}</Td>
                      <Td p={"12px"}>{item.last_name}</Td>
                      <Td p={"12px"}>{item.email}</Td>
                     {/*  <Td p={"12px"}>{item.address.street}</Td> */}
                      {/*  <Td p={"12px"}>{props.user.address.zipcode}</Td>
      <Td p={"12px"}>{props.user.phone}</Td> */}
                      <Td p={"12px"}>
                        <Link href={`/edit/user/${item.id}`}>
                          <a className="chakra-button css-6urt9f"> Edit</a>
                        </Link>
                        {/*  <ModalDel title="Do you want to delete your account?" /> */}
                      </Td>
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
    </>
  );
};
export default TUser;
