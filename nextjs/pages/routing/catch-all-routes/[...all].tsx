import { Box, Container, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const AllRoute = () => {
  const router = useRouter();
  const param = router.query.all;
  return (
    <>
      <Container maxW={"container.lg"}>
        <Box mb={5} borderWidth="1px" borderRadius="lg">
          <Box p="5">
            <Text color={"pink.400"} fontSize={"4xl"} fontWeight={"bold"}>
              Routing
            </Text>
            <Text
              textAlign={"center"}
              align={"center"}
              color={"black"}
              fontSize={"4xl"}
              fontWeight={"bold"}
            >
              Catch All Route: {param}
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AllRoute;
