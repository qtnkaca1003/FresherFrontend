import { Badge, Box, Grid, GridItem, Skeleton } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hook";
import AddReview from "./AddReview";

const ListReview = () => {
  const listReview = useAppSelector((state) => state.post.postList);
  //console.log(state);
  //const removeSpecialChar = (str: string) => str.replace(/[^a-zA-Z]/g, "-");
  const replaceSpecial =(str:string)=> str.replace(/[^a-zA-Z]/g, "-")
  return (
    <>
    <AddReview/>
      {listReview && listReview.length ? (
        listReview?.map((item) => {
          return (
            <Link key={item.id} to={`${replaceSpecial(item.category)}/${item.id}`}>
            <Box
                w={'7xl'}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Box p="6">
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      {item.category}
                    </Badge>
                  </Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {item.productName}
                  </Box>
                  <Box as="span" color="gray.600" fontSize="sm">
                    {item.content}
                  </Box>
                </Box>
              </Box>
            </Link>
          );
        })
      ) : (
        <>
          <Grid mt={"10"} templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem ml={"20"}>
              <Skeleton width="350px" height="600px" />
            </GridItem>
            <GridItem>
              <Skeleton width="350px" height="600px" />
            </GridItem>
            <GridItem>
              <Skeleton width="350px" height="600px" />
            </GridItem>
          </Grid>
        </>
      )}
    </>
  );
};
export default ListReview;
