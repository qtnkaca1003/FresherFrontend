import {
  Box,
  Container,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
const Page = () => {
  return (
    <>
      <Container maxW={"container.lg"}>
        <Heading
          fontSize={"4xl"}
          bgClip={"text"}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          textAlign={"center"}
        >
          {" "}
          All page
        </Heading>
        <Box borderWidth={"1px"} mt={"5"} borderRadius={"lg"}>
          <Box p="5">
            <UnorderedList>
              <ListItem
                _hover={{
                  color: "blue",
                  bgClip: "text",
                  bgGradient: "linear(to-l, #7928CA, #FF0080)",
                }}
              >
                <Link href={{ pathname: `/all-page/about` }} passHref>
                  <a>About Page</a>
                </Link>
              </ListItem>
              <ListItem
                _hover={{
                  color: "blue",
                  bgClip: "text",
                  bgGradient: "linear(to-l, #7928CA, #FF0080)",
                }}
              >
                <Link href={{ pathname: `/all-page/contact` }} passHref>
                  <a>Contact Page</a>
                </Link>
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Page;
