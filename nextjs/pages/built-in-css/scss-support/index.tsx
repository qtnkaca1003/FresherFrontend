import { Box, Container, Text } from "@chakra-ui/react";
import { StyleCode } from "../../../components/style";
const ScssSuport = () => {
  return (
    <>
      <Container maxW={"container.lg"}>
        <Box borderWidth="1px" borderRadius="lg">
          <Box p="5">
            <Text color={"pink.400"} fontSize={"4xl"} fontWeight={"bold"}>
              Scss Support
            </Text>
            <Text>
              {" "}
              Next.js allows you to import Sass using both the{" "}
              <span style={{ color: "#E53E3E" }}>`.scss`</span>
              and <span style={{ color: "#E53E3E" }}>`.scss`</span> extensions.
              You can use component-level Sass via CSS Modules and the{" "}
              <span style={{ color: "#E53E3E" }}>`.module.scss `</span> or{" "}
              <span style={{ color: "#E53E3E" }}>`.module.scss `</span>{" "}
              extension.
            </Text>
            <Text>
              Before you can use Next.js built-in Sass support, be sure to
              install sass
            </Text>
            <Box mt={"5"} borderRadius="lg" bg={"black"} width={"100%"} h={"70px"}> 
              <Text ml={"10"} lineHeight={"70px"} color={"white"}><span style={{color:"yellow"}}>npm install</span> --save-dev sass</Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default ScssSuport;
