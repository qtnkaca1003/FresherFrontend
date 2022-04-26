import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import {
  UnorderedList,
  Container,
  Image,
  Box,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
const { ipcRenderer } = window.require("electron");
function App() {
  const [data, setdata] = useState([]);
  const [value, setValue] = useState("");
  const [title, setTitle1] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const getData = () => {
      axios.get("https://www.reddit.com/r/aww.json").then((res) => {
        setdata(res.data.data.children);

        console.log(res.data.data.children);
      });
    };
    getData();
  }, []);
  ipcRenderer.on("title", (e, arg) => {
    setTitle1(arg);
  });

  const toggle = () => {
    setIsActive(!isActive);
    ipcRenderer.send("dark-mode:toggle",isActive)
    console.log(isActive);
  };
  //console.log(data[0].data.preview.images[0].source.url);
  const showImage = (image) => {
    ipcRenderer.send("show-image", image);
  };
  const setTitle = () => {
    //console.log("mới bấm click!");
    //console.log(value);
    ipcRenderer.send("set-title", value);
  };
  const getValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Container maxW={"container.xl"}>
        <Button onClick={toggle}>Toggle Dark Mode</Button>
        <Text>Title nè {title}</Text>
        <Text>Set title:</Text> <Input onChange={getValue} type={"text"} />
        <Button mb={"5"} onClick={setTitle}>
          Set title
        </Button>
        <UnorderedList>
          {data.map((item) => {
            return (
              <>
                <div key={item.data.id}>
                  <Box
                    mb={"5"}
                    maxW="sm"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    onClick={() => {
                      showImage(item.data.thumbnail);
                    }}
                  >
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      src={item.data.thumbnail}
                      alt={item.data.title}
                    />
                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                    >
                      {item.data.title}
                    </Box>
                  </Box>
                </div>
              </>
            );
          })}
        </UnorderedList>
      </Container>
    </>
  );
}

export default App;
