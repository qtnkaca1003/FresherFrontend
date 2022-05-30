import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Login from "../../pages/login";
import { Footer } from "../organisms/footer";
import { Header } from "../organisms/header";
import { Navigation } from "../organisms/navigation";

export default function Template({ children }: any) {
  const router = useRouter();
  const isLogin = false;
 /*  useEffect(() => {
    if (isLogin === false) {
      router.push("/login");
    }
  }); */

  return (
    <>
    {isLogin=== true?(<Box display={"flex"}>
        <Navigation />
        <Box position={"relative"} w={"100%"}>
          <Header />
          <main>{children}</main>
          <Footer mt="30px" position={"absolute"} />
        </Box>
      </Box>):(<><Login/></>)}
      
    </>
  );
}
