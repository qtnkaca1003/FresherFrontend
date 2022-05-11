import { Box, Container, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
const CssBuilt = () => {
  return (
    <>
      <Container maxW={"container.lg"}>
        <Box mb={5} borderWidth="1px" borderRadius="lg">
          <Box p="5">
            <Text color={"pink.400"} fontSize={"4xl"} fontWeight={"bold"}>
              CSS-Modules
            </Text>
            <Text mb={5}>
              Next.js allows you to import CSS files from a JavaScript file.
              This is possible because Next.js extends the concept of import
              beyond JavaScript.
            </Text>
            <Text color={"black"} fontSize={"2xl"} fontWeight={"bold"}>
              Adding a Global Stylesheet
            </Text>
            <Text>
              To add a stylesheet to your application, import the CSS file
              within pages/_app.js.
            </Text>
            <Text mb={5}>
              For example, consider the following stylesheet named styles.css:
            </Text>
            <Image
             
              src="/image/css-gobal.jpg"
              width={"800px"}
              height={"300px"}
              layout={"responsive"}
              alt="css-gobal"
            />
            <Text mb={5} color={"black"} fontSize={"2xl"} fontWeight={"bold"}>
              Improt style.css file
            </Text>
            <Image
              
              src="/image/importCss.jpg"
              width={"800px"}
              height={"300px"}
              layout={"responsive"}
              alt="importCss"
            />
            <Text mb={5}>
              These styles (styles.css) will apply to all pages and components
              in your application. Due to the global nature of stylesheets, and
              to avoid conflicts, you may only import them inside pages/_app.js.
            </Text>
            <Text mb={5} color={"black"} fontSize={"2xl"} fontWeight={"bold"}>
              Import styles from node_modules
            </Text>
            <Image
             
              src="/image/importCssModules.jpg"
              width={"800px"}
              height={"300px"}
              layout={"responsive"}
              alt="importCssModules"
            />
            <Text mb={5} color={"black"} fontSize={"2xl"} fontWeight={"bold"}>
              Adding Component-Level CSS
            </Text>
            <Image
              
              src="/image/addingComponent.jpg"
              width={"800px"}
              height={"300px"}
              layout={"responsive"}
              alt="addingComponent"
            />

            <Text mb={5} color={"black"} fontSize={"2xl"} fontWeight={"bold"}>
              Importing and using the above CSS file:
            </Text>
            <Image
              
              src="/image/using-css.jpg"
              width={"800px"}
              height={"300px"}
              layout={"responsive"}
              alt="using-css"
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default CssBuilt;
