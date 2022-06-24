import { Box, Menu, MenuList } from "@chakra-ui/react";
import React from "react";
import CAvatar from "../../Atoms/Avatar/avatar";
import CMenuButton from "../../Atoms/MenuButton/MenuButton";
import CMenuItem from "../../Atoms/MenuItem/MenuItem";
import CText from "../../Atoms/Text/Text";
interface IDropdownMenu {
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  
  padding?: string;
  borderLeft?: string;
  display?: string;
  lineHeight?: string;
  
  w?: string;
  contentMenuItem: string;
  heightItem?: string;
  widthItem?: string;
  title: string;
  src: string;
  onClickMenuItem: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const CDropDown = (dropDownProps: IDropdownMenu) => {
  return (
    <>
      <Box mr={5}>
        <Menu>
          <CMenuButton>
            <Box alignItems={"center"} display={"flex"}>
              {" "}
              <CAvatar size="sm" src={dropDownProps.src} />
              <CText title={dropDownProps.title} />
            </Box>
          </CMenuButton>
          <MenuList>
            <CMenuItem
              onClick={dropDownProps.onClickMenuItem}
              heightItem={dropDownProps.heightItem}
              widthItem={dropDownProps.widthItem}
              contentMenuItem={dropDownProps.contentMenuItem}
            />
          
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};
export default CDropDown;
