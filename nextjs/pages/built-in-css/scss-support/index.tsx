import { Box, Container, Image, Text } from "@chakra-ui/react";
import { StyleCode } from "../../../components/style";
const ScssSuport = () => {
  return (
    <>
      <Container maxW={"container.lg"}>
        <Box mb={5} borderWidth="1px" borderRadius="lg">
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
            <Box
              mt={"5"}
              borderRadius="lg"
              bg={"black"}
              width={"100%"}
              h={"70px"}
            >
              <Text ml={"10"} lineHeight={"70px"} color={"white"}>
                <span style={{ color: "yellow" }}>npm install</span> --save-dev
                sass
              </Text>
            </Box>
            <Text mt={5}>
              Sass support has the same benefits and restrictions as the
              built-in CSS support detailed above.
            </Text>
            <Box mt={5} borderRadius="lg" bg={"#fafafa"} width={"100%"}>
              <Text padding={5} color={"#666"}>
                Note: Sass supports two different syntaxes, each with their own
                extension. The .scss extension requires you use the SCSS syntax,
                while the .sass extension requires you use the Indented Syntax
                Sass. If you are not sure which to choose, start with the .scss
                extension which is a superset of CSS, and does not require you
                learn the Indented Syntax Sass.
              </Text>
            </Box>
            <Text color={"black"} fontSize={"2xl"} fontWeight={"bold"}>
              Customizing Sass Options
            </Text>
            <Text color={"#111"}>
              If you want to configure the Sass compiler you can do so by using
              sassOptions in next.config.js.
            </Text>
            <Text mb={5} color={"#111"}>
              For example to add includePaths:
            </Text>
            <Image src="/includePathScss.jpg" alt="includePath" />
            <Text color={"black"} fontSize={"2xl"} fontWeight={"bold"}>
              Sass Variables
            </Text>
            <Text mb={5} color={"#111"}>
              Next.js supports Sass variables exported from CSS Module files.
            </Text>
            <Text mb={5} color={"#111"}>
              For example, using the exported primaryColor Sass variable:
            </Text>
            <Image src="/variableScss.jpg" alt="variableScss" />
            <Image mt={10} src="/_app.jpg" alt="app" />
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default ScssSuport;
