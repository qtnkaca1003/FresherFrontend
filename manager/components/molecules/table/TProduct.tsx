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
import { IPage, IProduct } from "../../../types/interface";
import PaginationProduct from "../buttonpagin/paginProduct";
interface IProps {
  filteredProduct: IProduct[];
  status: number;
  data: IProduct[];
}
const TProduct = (props: IProps) => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>
             <PaginationProduct
                itemPage={5}
                maxPageNumerLitmit={3}
                path="/list-product/"
                pageNumerLitmit={3}
                data={props.data}
              />
          </TableCaption>
          <Thead>
            <Tr>
              <Th p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Product
              </Th>
            </Tr>
          </Thead>
          <Thead fontSize={"15px"} background={"#f5f6f8"}>
            <Tr h={"47px"}>
              <Th p={"12px"} textTransform={"none"} fontSize={"16px"}>
                #
              </Th>
              <Th p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Title
              </Th>
              <Th p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Category
              </Th>
              <Th p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Description
              </Th>
              <Th p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Price
              </Th>
              <Th p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.status == 200 ? (
              props.filteredProduct?.length == 0 ? (
                <>Not found</>
              ) : (
                props.filteredProduct?.map((item: IProduct, index) => {
                  return (
                    <Tr key={index}>
                      <Td p={"12px"}>{item.id}</Td>
                      <Td p={"12px"}>{item.title.slice(0, 20)}</Td>
                      <Td p={"12px"}>{item.category}</Td>
                      <Td p={"12px"}>{item.description.slice(0, 20)}</Td>
                      <Td p={"12px"}>{item.price}</Td>
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
export default TProduct;
