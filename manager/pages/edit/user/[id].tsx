import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CFormEditUser from "../../../components/form/FormEditUser";
import { User1 } from "../../../redux/slices/userSlices";
const EditUser = () => {
  const router = useRouter();
  const id = router.query.id;
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      axios.get("https://fakestoreapi.com/users/" + id).then((res) => {
        dispatch(User1(res.data));
        console.log(res.data);
      });
    };
    getUser();
  });

  return (
    <>
      <Box padding={"0 24px"}>
        <Box padding={"24px 0"}>
          <Text color={"#3d5170"} fontSize="3xl" fontWeight={"600"}>
            {" "}
            User Profile
          </Text>
        </Box>
        <Grid display={"flex"} templateColumns="repeat(1, 1fr)" gap={6}>
          <GridItem shadow={"2xl"} borderRadius={5} w="50%">
            {" "}
            <Box>
              <Box>
                <Box maxW="sm" borderRadius="lg" overflow="hidden">
                  <Box p="6">
                    <Box display="flex" alignItems="baseline">
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                      ></Box>
                    </Box>

                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                    ></Box>

                    <Box>
                      <Box as="span" color="gray.600" fontSize="sm">
                        / wk
                      </Box>
                    </Box>

                    <Box display="flex" mt="2" alignItems="center">
                      <Box
                        as="span"
                        ml="2"
                        color="gray.600"
                        fontSize="sm"
                      ></Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </GridItem>
          <GridItem shadow={"2xl"} borderRadius={5} w="100%">
            {" "}
            <Box p={"16px"}>
              <Text fontSize={"2xl"} fontWeight={"600"}>
                {" "}
                Account Details
              </Text>
              <CFormEditUser />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
export default EditUser;
