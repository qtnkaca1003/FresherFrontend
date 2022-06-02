import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { IAccount, IPage, IUser } from "../../../types/interface";
interface IProps {
  data: IAccount[];
}
const TCreate= (props: IProps) => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
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
                ID
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

              <Th p={"12px"} textTransform={"none"} fontSize={"16px"}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.data?.map((item: IAccount, index:number) => {
              return (
                <Tr key={index}>
                  <Td p={"12px"}>{item.id}</Td>
                  <Td p={"12px"}>{item.first_name}</Td>
                  <Td p={"12px"}>{item.last_name}</Td>
                  <Td p={"12px"}>{item.email}</Td>
                  <Td p={"12px"}></Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TCreate;
