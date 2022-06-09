import { Button, Menu, MenuButton } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface IMenuButton {
  borderRadius?: string;
  color?: string;
  width?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  className?: string;
  disabled?: boolean;
  rightIcon?: ReactNode;
  display?: string;
  bgColor?:string
  children?: React.ReactNode;
  onClick?: () => (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => void;
}
const CMenuButton = (menuButtonProps: IMenuButton) => {
  return (
    <Menu>
      <MenuButton bgColor={menuButtonProps.bgColor} color={menuButtonProps.color} disabled={menuButtonProps.disabled}  display={"flex"} as={Button}>
        Menu Button
        {menuButtonProps.children}
      </MenuButton>
    </Menu>
  );
};
export default CMenuButton;
