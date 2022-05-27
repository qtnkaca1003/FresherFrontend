import { Button } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface IButtonFl {
  title: string;
  borderRadius?: string;
  color?: string;
  width?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>, id:string) => void;
}
const CButton = (props: IButtonFl) => {
  return (
    <>
      <Button
        disabled={props.disabled}
        className={props.className}
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
