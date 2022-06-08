import { Box } from "@chakra-ui/react";
import React from "react";
import CButton from "../../Atoms/Button/button";
import CTitle from "../../Atoms/Title/Title";
import CInput from "../../Atoms/Input/input";
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
const CHeadmain = (headmainProps: IHeadmain) => {
  return (
    <Box w={"100%"} display={"flex"} justifyContent={"space-between"}>
      <Box>
        <CTitle
          title={headmainProps.title}
          color={headmainProps.color}
          fontSize={headmainProps.fontSize}
          fontWeight={headmainProps.fontWeight}
        />

        <CInput
          onChange={headmainProps.onChangeSearch}
          placeholder={headmainProps.placeholder}
        />
      </Box>
      <CButton type="button"
        title={headmainProps.titleBtn}
        colorScheme={"blue"}
        onClick={headmainProps.onClickBtn}
      />
    </Box>
  );
};
export default CHeadmain;
