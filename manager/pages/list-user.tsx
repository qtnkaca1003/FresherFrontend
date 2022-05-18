import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { CTable } from "../components/table";

const ListUser = () => {
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
              <Thead>
                <Tr>
                  <Th textTransform={"none"} fontSize={"16px"}>
                    User
                  </Th>
                </Tr>
              </Thead>
              <Thead>
                <Tr>
                  <Th textTransform={"none"} fontSize={"12px"}>
                    #
                  </Th>
                  <Th textTransform={"none"} fontSize={"12px"}>
                    First Name
                  </Th>
                  <Th textTransform={"none"} fontSize={"12px"}>
                    Last Name
                  </Th>
                  <Th textTransform={"none"} fontSize={"12px"}>
                    City
                  </Th>
                  <Th textTransform={"none"} fontSize={"12px"}>
                    Street
                  </Th>
                  <Th textTransform={"none"} fontSize={"12px"}>
                    Phone
                  </Th>
                  <Th textTransform={"none"} fontSize={"12px"}></Th>
                </Tr>
              </Thead>
             
               {/*  <CTable /> */}
              
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};
export default ListUser;
