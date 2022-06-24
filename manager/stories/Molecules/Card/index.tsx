import { Box } from "@chakra-ui/react";
import React from "react";
import CAvatar from "../../Atoms/Avatar/avatar";
import CTitle from "../../Atoms/Title/Title";
interface ICard {
  sizeAvatar?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  srcAvatar: string;
  colorTitle?: string;
  fontSizeTitle?: string;
  fontWeightTitle?: string;
  titleTitle: string;
  border?:string
  w?: string | number;
  h?: string | number;
}
const CCard = (cardprops: ICard) => {
  return (
    <Box
      w={cardprops.w}
      h={cardprops.h}
      border={cardprops.border}
      pt={5}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <CAvatar size={cardprops.sizeAvatar} src={cardprops.srcAvatar} />
      <CTitle
        color={cardprops.colorTitle}
        fontSize={cardprops.fontSizeTitle}
        fontWeight={cardprops.fontWeightTitle}
        title={cardprops.titleTitle}
      />
    </Box>
  );
};
export default CCard;
