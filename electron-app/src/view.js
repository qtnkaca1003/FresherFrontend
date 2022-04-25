import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { UnorderedList, Container, Image, Box } from "@chakra-ui/react";
const {ipcRenderer } = window.require("electron");
function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const getData = () => {
      axios.get("https://www.reddit.com/r/aww.json").then((res) => {
        setdata(res.data.data.children);
       
        console.log(res.data.data.children);
      });
    };
    getData();
  }, []);
  //console.log(data[0].data.preview.images[0].source.url);
  const showImage = (image) => {
    ipcRenderer.send("show-image",image);
  };
  
  return (
    <>
      <Container maxW={"container.xl"}>
        <UnorderedList>
          {data.map((item) => {
            return (
              <>
                <Box
                  mb={"5"}
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  onClick={()=>{showImage(item.data.thumbnail)}}
                >
                  <Image
                    boxSize="100px"
                    objectFit="cover"
                    src={item.data.thumbnail}
                    alt={item.data.title}
                  />
                  <Box
                    key={item.data.id}
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {item.data.title}
                  </Box>
                </Box>
              </>
            );
          })}
        </UnorderedList>
      </Container>
    </>
  );
}

export default App;
