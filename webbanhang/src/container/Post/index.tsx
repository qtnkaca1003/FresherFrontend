import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import ListReview from "../../components/post/ListReview";

const Post = () => {
  return (
    <>
      <Container
        d={"flex"}
        justifyContent={"space-between"}
        maxW={"container.xl"}
      >
        <SimpleGrid columns={1} spacing={10}>
          <Text align={"center"} fontSize="3xl">
            List Review
          </Text>
          <ListReview />
        </SimpleGrid>
      </Container>
    </>
  );
};
export default Post;
