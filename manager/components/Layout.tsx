import { Box } from "@chakra-ui/react";
import { Header } from "./head/Header";
import { Navigation } from "./navigation/Navigation";

export default function Layout({ children }: any) {
  return (
    <>
      <Box display={"flex"}>
        <Navigation />
        <Box w={"100%"}>
          <Header />
          <main>{children}</main>
        </Box>
      </Box>
    </>
  );
}
