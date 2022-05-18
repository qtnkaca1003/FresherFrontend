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
import React from "react";
import { CTable } from "../components/table";
import { IProduct } from "../types/interface";

interface IProps {
  products: IProduct[];
}
const ListProduct = ({ products }: IProps) => {
  const countPage = products.length / 5;
  console.log(products);

  return (
    <>
      <Box padding={"0 24px"}>
        <Box padding={"24px 0"}>
          <Text color={"#3d5170"} fontSize="3xl" fontWeight={"600"}>
            {" "}
            List Product
          </Text>
        </Box>
        <Box shadow={"2xl"} borderRadius={"10px"} padding={"24px 0"}>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>{
                 
                 countPage
                }</TableCaption>
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

                  <Th p={"12px"} textTransform={"none"} fontSize={"16px"}></Th>
                </Tr>
              </Thead>
              <Tbody>
                {products.map((item: IProduct, index) => {
                  return (
                    <Tr key={index}>
                      <CTable product={item} />
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
export default ListProduct;
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await await fetch("http://localhost:3000/api/page/5");
  const data = await res.json();
  console.log("data nè:", data);

  return {
    props: {
      products: data.find,
    },
  };
};
