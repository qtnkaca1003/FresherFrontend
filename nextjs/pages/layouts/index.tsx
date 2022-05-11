import { Box, Container, Text,Image } from "@chakra-ui/react";

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
             
             mb={5}
              src="/image/layout.JPG"
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
             mb={5}
              src="/image/single-layout.JPG"
              alt="single-layout"
            />
            <Text mb={5} color={"black"} fontSize={"2xl"} fontWeight={"bold"}>
              Per-Page Layouts
            </Text>
            <Image
             mb={5}
              src="/image/pre-page-layout-index.JPG"
              alt="pre-page-layout-index"
            />
            <Image
             mb={5}
              src="/image/pre-page-layout-app.JPG"
              alt="pre-page-layout-app"
            />
            <Text mb={5} color={"black"} fontSize={"2xl"} fontWeight={"bold"}>
              With TypeScript
            </Text>
            <Image
             mb={5}
              src="/image/pre-page-typescript-index.JPG"
              alt="pre-page-typescript-index"
            />
            <Image
             mb={5}
              src="/image/pre-page-typescript-app.JPG"
              alt="pre-page-typescript-app"
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Layouts;
