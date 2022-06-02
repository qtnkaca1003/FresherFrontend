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
import { IProduct} from "../../../types/interface";
interface IProps {
  data: IProduct[];
}
const TCreateProduct = (props: IProps) => {
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
                Title
              </Th>
              <Th p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Price
              </Th>
              <Th p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Category
              </Th>
              <Th p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Description
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.data?.map((item: IProduct, index: number) => {
              return (
                <Tr key={index}>
                  <Td p={"12px"}>{item.id}</Td>
                  <Td p={"12px"}>{item.title}</Td>
                  <Td p={"12px"}>{item.price}</Td>
                  <Td p={"12px"}>{item.category}</Td>
                  <Td p={"12px"}>{item.description}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TCreateProduct;
