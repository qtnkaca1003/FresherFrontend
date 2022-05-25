import {
  Box,
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import apiProduct from "../../api/Product";
import ButtonPagin from "../../components/pagin";
import { CTable } from "../../components/table/TProduct";
import data from "../../dataprouct.json";
import { IProduct } from "../../types/interface";
interface IProps {
  products: IProduct[];
  status: number;
}
const ListProduct = ({ products, status }: IProps) => {
  const router = useRouter();
  //console.log(status);
  
  const toAddProduct = () => {
    router.push("/add-product");
  };
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
            List Product
          </Text>
          <Button colorScheme={"blue"} onClick={toAddProduct}>
            {" "}
            + Add Product
          </Button>
        </Box>
        <Box shadow={"2xl"} borderRadius={"10px"} padding={"24px 0"}>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>
                <ButtonPagin
                  itemPage={5}
                  maxPageNumerLitmit={3}
                  path="/list-product/"
                  pageNumerLitmit={3}
                  data={data}
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

                  <Th p={"12px"} textTransform={"none"} fontSize={"16px"}></Th>
                </Tr>
              </Thead>
              <Tbody>
                {status == 200 ? (
                  products.map((item: IProduct, index) => {
                    return (
                      <Tr key={index}>
                        <CTable product={item} />
                      </Tr>
                    );
                  })
                ) : (
                  <>
                    <Tr>
                      <Td>Error</Td>
                    </Tr>
                  </>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};
export default ListProduct;
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page: string | string[] | number = query.id || 1;
  const data = await (await apiProduct.getAll()).data;
  const itemPerPage = 5;
  const currenPage = Number(page);
  const indexOfLastItem = currenPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = data.slice(indexOfFirstItem, indexOfLastItem);
  //console.log(currentItem);
  
  return {
    props: {
      products: currentItem,
      status: data.status="200",
    },
  };
};
