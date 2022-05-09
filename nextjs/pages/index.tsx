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
      { name: "CSS Modules",path:"/built-in-css/css-modules" },
      { name: "CSS in Js",path:"/built-in-css/css-in-js" },
      { name: "Sass Support",path:"/built-in-css/scss-support" },
    ],
  },
  {
    title: "Layouts",
    data: [
      { name: "Single Shared Layout", path:"/single-shared-layout" },
      { name: "Per-Page Layouts",path:"/pre-page-layout" }, 
    ],
  },
  {
    title: "Static File Serving",
    data: [
      { name: "Get Static Props" },
      { name: "Get Static Path" },
      { name: "Get Sever Side Props" },
    ],
  },
  {
    title: "Routing",
    data: [
      { name: "Get Static Props" },
      { name: "Get Static Path" },
      { name: "Get Sever Side Props" },
    ],
  },
  {
    title: "API Routes",
    data: [
      { name: "Get Static Props" },
      { name: "Get Static Path" },
      { name: "Get Sever Side Props" },
    ],
  },
  {
    title: "Custom Sever",
    data: [
      { name: "Get Static Props" },
      { name: "Get Static Path" },
      { name: "Get Sever Side Props" },
    ],
  },
  {
    title: "Custom `App`",
    data: [
      { name: "Get Static Props" },
      { name: "Get Static Path" },
      { name: "Get Sever Side Props" },
    ],
  },
  {
    title: "Custom `Document`",
    data: [
      { name: "Get Static Props" },
      { name: "Get Static Path" },
      { name: "Get Sever Side Props" },
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
