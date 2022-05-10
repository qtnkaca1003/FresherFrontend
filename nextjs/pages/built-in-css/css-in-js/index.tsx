import { Box, Container, Image, Text } from "@chakra-ui/react";
import { StyleCode } from "../../../components/style";
const CssInJs = () => {
  return (
    <>
      <Container maxW={"container.lg"}>
        <Box mb={5} borderWidth="1px" borderRadius="lg">
          <Box p="5">
            <Text color={"pink.400"} fontSize={"4xl"} fontWeight={"bold"}>
              CSS-in-JS
            </Text>
            <Text mb={5}>
              It is possible to use any existing CSS-in-JS solution. The
              simplest one is inline styles:
            </Text>
            <Image mb={5} src="/css-inline.jpg" alt="css-inline" />
            <Text mb={5}>
              We bundle styled-jsx to provide support for isolated scoped CSS.
              The aim is to support shadow CSS similar to Web Components, which
              unfortunately do not support server-rendering and are JS-only.
            </Text>
            <Text mb={5}>
              See the above examples for other popular CSS-in-JS solutions (like
              Styled Components).
            </Text>
            <Text mb={5}>A component using styled-jsx looks like this:</Text>
            <Image mb={5} src="/style-jsx.jpg" alt="style-jsx" />
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default CssInJs;
