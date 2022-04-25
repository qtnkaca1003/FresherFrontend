import React, { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
const { ipcRenderer } = window.require("electron");

const CImage = () => {
  const [image, setimage] = useState("");

  useEffect(() => {
    ipcRenderer.on("image", (e, arg) => {
      setimage(arg);
    });
  }, []);
  console.log(image);
  return (
    <div>
      <Image boxSize="500px" /* objectFit="cover" */ src={image} />
    </div>
  );
};

export default CImage;
