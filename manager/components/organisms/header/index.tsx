import { Box } from "@chakra-ui/react";
import React from "react";
import { useAppDispatch } from "../../../hook";
import { deleteToken } from "../../../redux/slices/userSlices";
import { IToken } from "../../../types/interface";
import CDropDown from "../../molecules/dropdownmenu";
import CSearch from "../../molecules/search";
interface IHeader {
  src: string;
  placeholder?: string;
  onClickMenuItem:(event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const Header = () => {
  const dispatch = useAppDispatch();
  const handelLogout =()=>{
    const token: IToken = {
      token: "",
    };
    dispatch(deleteToken(token))
  }
  return (
    <>
      <Box
        h={"60px"}
        lineHeight={"60px"}
        boxShadow="2xl"
        bg="white"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <CSearch placeholder="Search for something..." />
        <CDropDown
          onClickMenuItem={handelLogout}
          heightItem={"30px"}
          contentMenuItem="Log out"
          src={"./image/avatar.jpg"}
          title="Nhan"
        />
      </Box>
    </>
  );
};
