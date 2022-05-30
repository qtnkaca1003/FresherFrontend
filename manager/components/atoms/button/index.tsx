import { Button } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface IButton {
  title: string;
  borderRadius?: string;
  color?: string;
  width?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  className?: string;
  disabled?: boolean;
  colorScheme?: string;
  icon?: ReactNode;
  m?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const CButton = (props: IButton) => {
  return (
    <>
      <Button
        m={props.m}
        disabled={props.disabled}
        className={props.className}
        colorScheme={props.colorScheme}
        w={props.width}
        h={props.height}
        fontWeight={props.fontWeight}
        fontSize={props.fontSize}
        color={props.color}
        borderRadius={props.borderRadius}
        onClick={props.onClick}
      >
        {props.icon} {props.title}
      </Button>
    </>
  );
};
export default CButton;
