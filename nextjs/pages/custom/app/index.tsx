import {
  Box,
  Container,
  Text,
  UnorderedList,
  ListItem,
  Image
} from "@chakra-ui/react";

const CustomApp = () => {
  return (
    <Container maxW={"container.lg"}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        mb={5}
        borderWidth="1px"
        borderRadius="lg"
      >
        <Box p="5" w={"container.md"}>
          <Text color={"pink.400"} fontSize={"4xl"} fontWeight={"bold"}>
            Custom App
          </Text>
          <Text mb={5}>
            Next.js uses the App component to initialize pages. You can override
            it and control the page initialization. Which allows you to do
            amazing things like:
          </Text>
          <UnorderedList textAlign={"left"} styleType={"none"}>
            <ListItem>- Persisting layout between page changes</ListItem>
            <ListItem>- Keeping state when navigating pages</ListItem>
            <ListItem>- Custom error handling using component</ListItem>{" "}
            <ListItem>- DidCatch Inject additional data into pages </ListItem>{" "}
            <ListItem>- Add global CSS</ListItem>
          </UnorderedList>
          <Text mb={5}>
            To override the default App, create the file ./pages/_app.js as
            shown below:
          </Text>
          <Image mb={5} src="/image/customApp.JPG" alt="customApp" />
        </Box>
      </Box>
    </Container>
  );
};
export default CustomApp;
