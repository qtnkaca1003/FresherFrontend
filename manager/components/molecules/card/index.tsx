import { Box } from "@chakra-ui/react";
import React from "react";
import CAvatar from "../../atoms/avatar";
import CTitle from "../../atoms/title";
interface ICard {
  sizeAvatar?: string;
  srcAvatar: string;
  colorTitle?: string;
  fontSizeTitle?: string;
  fontWeightTitle?: string;
  titleTitle: string;
}
const CCard = (props: ICard) => {
  return (
    <Box pt={5} display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <CAvatar size={props.sizeAvatar} src={props.srcAvatar} />
      <CTitle
        color={props.colorTitle}
        fontSize={props.fontSizeTitle}
        fontWeight={props.fontWeightTitle}
        title={props.titleTitle}
      />
    </Box>
  );
};
export default CCard;
