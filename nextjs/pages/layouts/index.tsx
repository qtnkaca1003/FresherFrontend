import { Box, Container, Text } from "@chakra-ui/react";
import Image from "next/image";
const Layouts = () => {
  return (
    <>
      <Container maxW={"container.lg"}>
        <Box mb={5} borderWidth="1px" borderRadius="lg">
          <Box p="5">
            <Text color={"pink.400"} fontSize={"4xl"} fontWeight={"bold"}>
              Layouts
            </Text>
            <Text mb={5}>
              The React model allows us to deconstruct a page into a series of
              components. Many of these components are often reused between
              pages. For example, you might have the same navigation bar and
              footer on every page.
            </Text>
            <Image
              width={"700px"}
              height={"300px"}
              layout={"responsive"}
             
              src="/image/layout.jpg"
              alt="layout"
            />
            <Text color={"black"} fontSize={"2xl"} fontWeight={"bold"}>
              Single Shared Layout with Custom App
            </Text>
            <Text mb={5}>
              To add a stylesheet to your application, import the CSS file
              within pages/_app.js.
            </Text>
            <Image
              width={"700px"}
              height={"300px"}
              layout={"responsive"}
              src="/image/single-layout.jpg"
              alt="single-layout"
            />
            <Text mb={5} color={"black"} fontSize={"2xl"} fontWeight={"bold"}>
              Per-Page Layouts
            </Text>
            <Image
              width={"700px"}
              height={"300px"}
              layout={"responsive"}
              src="/image/pre-page-layout-index.jpg"
              alt="pre-page-layout-index"
            />
            <Image
              width={"700px"}
              height={"300px"}
              layout={"responsive"}
              src="/image/pre-page-layout-app.jpg"
              alt="pre-page-layout-app"
            />
            <Text mb={5} color={"black"} fontSize={"2xl"} fontWeight={"bold"}>
              With TypeScript
            </Text>
            <Image
              width={"700px"}
              height={"300px"}
              layout={"responsive"}
              src="/image/pre-page-typescript-index.jpg"
              alt="pre-page-typescript-index"
            />
            <Image
              width={"700px"}
              height={"300px"}
              layout={"responsive"}
              src="/image/pre-page-typescript-app.jpg"
              alt="pre-page-typescript-app"
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Layouts;
