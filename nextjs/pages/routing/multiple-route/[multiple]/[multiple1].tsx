import { Box, Container, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
const Multiple = () => {
  const router = useRouter();
  return (
    <>
      <Container maxW={"container.lg"}>
        <Box mb={5} borderWidth="1px" borderRadius="lg">
          <Box  p="5">
            <Text color={"pink.400"} fontSize={"4xl"} fontWeight={"bold"}>
              Routing
            </Text>
            <Text
              align={"center"}
              color={"black"}
              fontSize={"4xl"}
              fontWeight={"bold"}
            >
              Multiple: {router.query.multiple}
            </Text>
            <Text
              align={"center"}
              color={"black"}
              fontSize={"4xl"}
              fontWeight={"bold"}
            >
              Multiple: {router.query.multiple1}
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Multiple;
