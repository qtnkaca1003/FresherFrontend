import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Logo from "../icons/logo";
const Header = () => {
  return (
    <>
      <Container maxW={"container.lg"}>
        <Box>
          <Flex h={16}>
            <HStack w={"100%"} display={"flex"} fontSize={"1xl"} fontWeight={"500"} justifyContent={"space-between"}>
              <Box cursor="pointer">
               <Link href={'/'}><a><Logo></Logo></a></Link> 
              </Box>
              <Box cursor="pointer">
                <Text>Pages</Text>{" "}
              </Box>
              <Box cursor="pointer">
                <Text>Data Fetching</Text>
              </Box>
              <Box cursor="pointer">
                <Text>Built-in CSS Support</Text>
              </Box>
              <Box cursor="pointer">
                <Text>Layouts</Text>  
              </Box>
              <Box cursor="pointer">
                <Text>Routing</Text>
              </Box>
              <Box cursor="pointer">
                <Text>API Routes</Text>
              </Box>
            </HStack>
          </Flex>
        </Box>
      </Container>
    </>
  );
};
export default Header;
