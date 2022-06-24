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
  bgColor?: string;
  display?: string;
  size?: string;
  children?: React.ReactNode;
  onClick?: () => (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => void;
}
const CMenuButton = (menuButtonProps: IMenuButton) => {
  return (
    <>
      {" "}
      <MenuButton
        disabled={menuButtonProps.disabled}
        color={menuButtonProps.color}
        bgColor={menuButtonProps.bgColor}
        display={"flex"}
        as={Button}
      >
        Menu Button
        {menuButtonProps.children}
      </MenuButton>
      <MenuButton display={"flex"} as={Button}>
        {menuButtonProps.children}
      </MenuButton>
    </>
  );
};
export default CMenuButton;
