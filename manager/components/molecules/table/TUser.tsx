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
import { IPage, IUser } from "../../../types/interface";
import CAvatar from "../../atoms/avatar";
import Pagination from "../buttonpagin";
import ModalDel from "../modal";
interface IProps {
  filteredUsers: IUser[];
  status: number;
  data: IPage;

  onClickBtn?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
                Avatar
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
                      <Td p={"12px"}>
                        <CAvatar src={item.avatar} size={"sm"} />
                      </Td>
                      <Td p={"12px"}>{item.first_name}</Td>
                      <Td p={"12px"}>{item.last_name}</Td>
                      <Td p={"12px"}>{item.email}</Td>
                      <Td p={"12px"}>
                        <Link href={`/edit/user/${item.id}`}>
                          <a className="chakra-button css-6urt9f"> Edit</a>
                        </Link>
                        <ModalDel
                          title="Delete"
                          id={item.id}
                          onClickBtn={props.onClickBtn}
                        />
                        {/* <Button
                          ml={3}
                          value={item.id}
                          onClick={props.onClickBtn}
                          colorScheme={"red"}
                        >
                          Delete
                        </Button> */}
                      </Td>
                      <Td p={"12px"}></Td>
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
