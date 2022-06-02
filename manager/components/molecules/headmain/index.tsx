import { Box } from "@chakra-ui/react";
import React from "react";
import CButton from "../../atoms/button";
import CTitle from "../../atoms/title";
import CSearch from "../search";
interface IHeadmain {
  title?: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  colorScheme?: string;
  placeholder: string;
  titleBtn: string;
  onChangeSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickBtn?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const CHeadmain = (props: IHeadmain) => {
  return (
    <Box w={"100%"} display={"flex"} justifyContent={"space-between"}>
      <Box>
        <CTitle
          title={props.title}
          color={"#3d5170"}
          fontSize={"3xl"}
          fontWeight={"600"}
        />

        <CSearch
          onChange={props.onChangeSearch}
          placeholder={props.placeholder}
        />
      </Box>
      <CButton type="button"
        title={props.titleBtn}
        colorScheme={"blue"}
        onClick={props.onClickBtn}
      />
    </Box>
  );
};
export default CHeadmain;
