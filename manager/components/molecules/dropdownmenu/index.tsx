import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import CAvatar from "../../atoms/avatar";
import { ArrowDownIcon } from "../../atoms/icons/ArrowDownIcon";
import CText from "../../atoms/text";

interface IDropdownMenu {
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  title: string;
  padding?: string;
  borderLeft?: string;
  display?: string;
  lineHeight?: string;
  w?: string;
  src:string
}
const CDropDown = (props: IDropdownMenu) => {
  return (
    <>
      <Box display={"inline-flex"} alignItems={"center"}>
        <CAvatar src={props.src}  />
        <CText title={props.title} />
        <ArrowDownIcon />
      </Box>
    </>
  );
};
export default CDropDown;
