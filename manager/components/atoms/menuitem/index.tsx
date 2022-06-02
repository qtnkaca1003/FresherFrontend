import { MenuItem } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface IMenuItem {
  contentMenuItem: string;
  borderRadius?: string;
  color?: string;
  widthItem?: string;
  fontSize?: string;
  fontWeight?: string;
  heightItem?: string;
  className?: string;
  disabled?: boolean;
  rightIcon?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const CMenuItem = (props: IMenuItem) => {
  return (
    <>
      <MenuItem
        onClick={props.onClick}
        width={props.widthItem}
        height={props.heightItem}
      >
        {props.contentMenuItem}
      </MenuItem>
    </>
  );
};
export default CMenuItem;
