import { Box } from "@chakra-ui/react";
import { Footer } from "./footer/Footer";
import { Header } from "./head/Header";
import { Navigation } from "./navigation/Navigation";

export default function Layout({ children }: any) {
  return (
    <>
      <Box display={"flex"}>
        <Navigation />
        <Box w={"100%"}>
          <Header />
          <main style={{ minHeight: "78.3vh" }}>{children}</main>
          <Footer />
        </Box>
      </Box>
    </>
  );
}
