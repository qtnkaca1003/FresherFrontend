import { Grid, GridItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hook";
import Login from "../../pages/login";
import { Footer } from "../atoms/footer";
import { Header } from "../organisms/header";
import { Navigation } from "../organisms/navigation";
export default function Template({ children }: any) {
  const router = useRouter();
  const [width, setWidth] = useState<string>("0px");
  const token = useAppSelector((state) => state.addToken.token.token);
  const active = useAppSelector((state) => state.activeMenu.change);
  useEffect(() => {
    if (token === "") {
      router.push("/login");
    } else {
      router.push("/");
    }
    if (active === true) setWidth("300px");
    else {
      setWidth("0px");
    }
  }, [token, active]);


  return (
    <>
      {token != "" ? (
        <Grid
          position={"relative"}
          templateAreas={`"header header"
        "nav main"
        "nav footer"`}
          gridTemplateRows={"50px 1fr 40px"}
          gridTemplateColumns={`${width} 1fr`}
          h="100wh"
          gap="1"
        >
          <GridItem area={"header"}>
            <Header />
          </GridItem>
          <GridItem area={"nav"}>
            <Navigation />
          </GridItem>
          <GridItem w={"100wh"} area={"main"}>
            <main>{children}</main>
          </GridItem>
          <GridItem w={"100%"} position={"absolute"} bottom={"0"} area={"footer"}>
            <Footer />
          </GridItem>
        </Grid>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
}
