import { Button, MenuButton } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
interface Ichildren {
  children?: React.ReactNode;
}
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
  size?: string;
  onClick?: () => (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => void;
}
const CMenuButton: FC<Ichildren> = ({ children }, props: IMenuButton) => {
  return (
    <MenuButton display={"flex"} as={Button}>
      {children}
    </MenuButton>
  );
};
export default CMenuButton;
