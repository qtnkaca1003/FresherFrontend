import type { ReactElement } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import { Box, Container, Wrap } from "@chakra-ui/react";
import Card from "../components/Card";

const data = [
  {
    title: "Data Fetching",
    name: "",
    price: 0,

    data: [
      {
        description: "Get Static Props",
        id: 0,
        path: "/data-fetching/get-static-props",
      },
      { description: "Get Static Path", id: 1 },
      {
        description: "Get Sever Side Props",
        id: 2,
        path: "/data-fetching/get-sever-side-props",
      },
    ],
  },
  {
    title: "CSS Modules",
    name: "",
    price: 0,
    data: [
      { description: "CSS Modules", id: 0 },
      { description: "CSS in Js", id: 1 },
      { description: "Sass Support", id: 2 },
    ],
  },
  {
    title: "Layouts",
    name: "",
    price: 0,
    data: [
      { description: "Single Shared Layout", id: 0 },
      { description: "Per-Page Layouts", id: 1 },
      { description: "Get Sever Side Props", id: 2 },
    ],
  },
  {
    title: "Static File Serving",
    name: "",
    price: 0,
    data: [
      { description: "Get Static Props", id: 0 },
      { description: "Get Static Path", id: 1 },
      { description: "Get Sever Side Props", id: 2 },
    ],
  },
  {
    title: "Routing",
    name: "",
    price: 0,
    data: [
      { description: "Get Static Props", id: 0 },
      { description: "Get Static Path", id: 1 },
      { description: "Get Sever Side Props", id: 2 },
    ],
  },
  {
    title: "API Routes",
    name: "",
    price: 0,
    data: [
      { description: "Get Static Props", id: 0 },
      { description: "Get Static Path", id: 1 },
      { description: "Get Sever Side Props", id: 2 },
    ],
  },
  {
    title: "Custom Sever",
    name: "",
    price: 0,
    data: [
      { description: "Get Static Props", id: 0 },
      { description: "Get Static Path", id: 1 },
      { description: "Get Sever Side Props", id: 2 },
    ],
  },
  {
    title: "Custom `App`",
    name: "",
    price: 0,
    data: [
      { description: "Get Static Props", id: 0 },
      { description: "Get Static Path", id: 1 },
      { description: "Get Sever Side Props", id: 2 },
    ],
  },
  {
    title: "Custom `Document`",
    name: "",
    price: 0,
    data: [
      { description: "Get Static Props", id: 0 },
      { description: "Get Static Path", id: 1 },
      { description: "Get Sever Side Props", id: 2 },
    ],
  },
];
export default function Home() {
  return (
    <>
      <Container maxW={"container.lg"}>
        <h1 className={styles.title}>TÌM HIỂU NEXTJS</h1>
        <Box>
          <Wrap mt={"5"} spacing="20px">
            {data.map((item) => {
              return (
                <Card
                  key={item.name}
                  title={item.title}
                  data={item.data}
                />
              );
            })}
          </Wrap>
        </Box>
      </Container>
    </>
  );
}
/* Home.getLayout = function getLayout(page : ReactElement){
  return(
    <Layout>
      {page}
    </Layout>
  )
} */

/* export async function getStaticProps() {
  const res = await (await fetch("https://demo.vercel.store/api/catalog/products"));
  const data =await res.json();
 console.log("api: ",data);
  return {
    props: {
      product: data
    },
  };
} */
