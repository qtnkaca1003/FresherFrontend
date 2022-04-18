import { Badge, Box, Container } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hook";

const DetaiReview = () => {
  const { id } = useParams();
  const posts = useAppSelector((state) => state.post.postList);
  const post = posts.find((x) => x.id === Number(id));
  return (
    <>
      <Container
        d={"flex"}
        justifyContent={"space-between"}
        maxW={"container.xl"}
      >
        <Box w={"7xl"} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {post?.category}
              </Badge>
            </Box>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {post?.productName}
            </Box>
            <Box as="span" color="gray.600" fontSize="sm">
              {post?.content}
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default DetaiReview;
