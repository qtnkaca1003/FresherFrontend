import { Box, Image, Text } from "@chakra-ui/react";
import IconVercel from "../icons/vercel";
const Footer = () => {
  return (
    <>
      <footer>
        <Box display={"flex"} justifyContent={"center"}>
          {" "}
          <IconVercel></IconVercel>
        </Box>  
        <Text textAlign={"center"}> Copyright © 2022 Vercel Inc. All rights
          reserved.</Text>
      </footer>
    </>
  );
};
export default Footer;
