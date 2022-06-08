import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { changeMenu } from "../../../redux/slices/changeMenuSlice";
import { deleteToken } from "../../../redux/slices/userSlices";
import { IToken } from "../../../types/interface";
import CButton from "../../Atoms/Button/button";
import { SwitchIcon } from "../../Atoms/Icon/SwitchIcon";
import CDropDown from "../../Molecules/DropDownMenu/index";
import CLinknavi from "../../Molecules/LinkNavigatoin/index";
import CSearch from "../../Molecules/Search/index";
/* interface IHeader {
  src: string;
  placeholder?: string;
  onClickMenuItem: (event: React.MouseEvent<HTMLButtonElement>) => void;
} */
export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = colorMode === "dark" ? "#fff" : "#000";
  const active = useAppSelector((state) => state.activeMenu.change);
  const dispatch = useAppDispatch();
  const handelLogout = () => {
    const token: IToken = {
      token: "",
    };
    dispatch(deleteToken(token));
  };
  const handelChange = () => {
    const isChange: any = localStorage.getItem("change");

    if (isChange === "template1" || isChange == null) {
      localStorage.setItem("change", "template2");
    }
    if (isChange === "template2" || isChange == null) {
      localStorage.setItem("change", "template1");
    }
    location.reload();
  };
  const handelChangeMenu = () => {
    if (active === true) dispatch(changeMenu(false));
    else {
      dispatch(changeMenu(true));
    }
  };
  return (
    <>
      <Box
        h={"60px"}
        lineHeight={"60px"}
        boxShadow="2xl"
        w={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box display={"flex"} alignItems={"center"}>
          <CLinknavi
            color={color}
            fontWeight="500"
            fontSize={"17px"}
            padding="20px 45px"
            title={"Dashboard"}
            link={"/"}
          />
          <IconButton
            onClick={handelChangeMenu}
            aria-label="toggle"
            icon={<HamburgerIcon />}
          />
        </Box>

        <CSearch placeholder="Search for something..." />

        <Box display={"flex"} alignItems={"center"}>
          {colorMode === "dark" ? (
            <IconButton
              onClick={toggleColorMode}
              aria-label="Light"
              size="sm"
              icon={<SunIcon />}
            />
          ) : (
            <IconButton
              onClick={toggleColorMode}
              variant="outline"
              aria-label="Dark"
              size="sm"
              icon={<MoonIcon />}
            />
          )}
          <IconButton
            margin={"0px 15px"}
            size="sm"
            aria-label="Switch"
            onClick={handelChange}
            icon={<SwitchIcon />}
          />

          <CDropDown
            onClickMenuItem={handelLogout}
            heightItem={"30px"}
            contentMenuItem="Log out"
            src={"./image/avatar.jpg"}
            color={"#F0FFFF"}
            title="NHAN"
          />
        </Box>
      </Box>
    </>
  );
};
