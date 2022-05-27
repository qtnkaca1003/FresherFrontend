import { Box } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../organisms/footer";
import { Header } from "../organisms/header";
import { Navigation } from "../organisms/navigation";

export default function Template({ children }: any) {
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
