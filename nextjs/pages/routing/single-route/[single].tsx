import { Box, Container, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Single = () => {
  const router = useRouter();
  const param = router.query.single;
  return (
    <Container maxW={"container.lg"}>
      <Box mb={5} borderWidth="1px" borderRadius="lg">
        <Box p="5">
          <Text color={"pink.400"} fontSize={"4xl"} fontWeight={"bold"}>
            Routing
          </Text>
          <Text
            align={"center"}
            color={"black"}
            fontSize={"4xl"}
            fontWeight={"bold"}
          >
            Param: {param}
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default Single;
