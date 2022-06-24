import type { NextPage } from "next";
import { Box, Container, Heading, Text, Wrap } from "@chakra-ui/react";
import CAccordion from "../components/Accordion";
const data = [
  {
    title: "Pages",
    data: [
      {
        name: "All Page",
        path: "/all-page",
      },
      {
        name: "About",
        path: "/all-page/about",
      },
      {
        name: "Contact",
        path: "/all-page/contact",
      },
    ],
  },
  {
    title: "Data Fetching",
    data: [
      {
        name: "Get Static Props",

        path: "/data-fetching/get-static-props",
      },
      { name: "Get Static Path", path: "/data-fetching/get-static-paths" },
      {
        name: "Get Sever Side Props",

        path: "/data-fetching/get-sever-side-props",
      },
    ],
  },
  {
    title: "Built-in CSS Support",
    data: [
      { name: "CSS Modules", path: "/built-in-css/css-modules" },
      { name: "CSS in Js", path: "/built-in-css/css-in-js" },
      { name: "Sass Support", path: "/built-in-css/scss-support" },
    ],
  },
  {
    title: "Layouts",
    data: [{ name: "Layouts", path: "/layouts" }],
  },
  {
    title: "Static File Serving",
    data: [{ name: "Static File Serving", path: "/static-file-serving" }],
  },
  {
    title: "Routing",
    data: [
      { name: "Single Route", path: "/routing/single-route/single-page" },
      {
        name: "Multiple Route",
        path: "/routing/multiple-route/multiple-page1/multiple-page2",
      },
      {
        name: "Catch All Route",
        path: "/routing/catch-all-routes/multiple-page1/multiple-page2/multiple-page3",
      },
    ],
  },
  {
    title: "API Routes",
    data: [
      { name: "Api Routes", path: "/api" },
      { name: "Dynamic Routes", path: "api-routes/dynamic-route" },
    ],
  },
  {
    title: "Custom",
    data: [
      {
        name: "Custom Sever",
        path: "https://nextjs.org/docs/advanced-features/custom-server",
      },
      { name: "Custom `App`", path: "/custom/app" },
      { name: "Custom `Document`", path: "/custom/document" },
      { name: "Custom Error Page", path: "/error" },

    ],
  },
];
const Home: NextPage = () => {
  return (
    <>
      <Container h={"100%"} maxW={"container.lg"}>
        <Heading
          fontSize={"6xl"}
          bgClip={"text"}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          textAlign={"center"}
        >
          {" "}
          TÌM HIỂU NEXTJS
        </Heading>
        <Box borderWidth={"1px"} borderRadius={"lg"} mb={"5"}>
          <Box p="6">
            {data.map((item, index) => {
              return (
                <CAccordion
                  key={index}
                  title={item.title}
                  data={item.data}
                ></CAccordion>
              );
            })}
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Home;
