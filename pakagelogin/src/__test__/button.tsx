import React, { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
/* import "./button.scss"; */
interface IButton {
  text?: string;
  className?:string
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  cursor?: string;
  fontSize?: string;
  color?: string;
  fontWeight?:
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | "bold"
    | "bolder"|"lighter"|"normal"|"initial";
  width?: string;
  border?: string;
  height?: string;
  borderRadius?: string;
  background?: any;
}
interface IDiv {
  width?: string;
  height?: string;
  borderRadius?: string;
  background?: any;
  size?: "small" | "medium" | "large";
  className?: string;
}
const StyleButtton = styled.button<IButton>((props) => ({
  cursor: props.cursor,
  fontSize: props.fontSize,
  color: props.color,
  fontWeight: props.fontWeight,
  width:
    props.size === "large"
      ? "390px"
      : props.size === "medium"
      ? "300px"
      : "200px",

  height:
    props.size === "large" ? "50px" : props.size === "medium" ? "50px" : "50px",
  border: props.border,
  borderRadius: props.borderRadius,
  background: props.background,
}));
const StyleDiv = styled.div<IDiv>((props) => ({
  width:
    props.size === "large"
      ? "390px"
      : props.size === "medium"
      ? "300px"
      : "200px",

  height:
    props.size === "large" ? "50px" : props.size === "medium" ? "50px" : "50px",
  borderRadius: props.borderRadius,
  background: props.background,
  ":before{background:`props.background`}": props.background,
}));
const Button = (PropsButton: IButton) => {
  const handleClick = () => {
    console.log("hi");
  };

  return (
    <StyleDiv
      size={PropsButton.size}
      background={PropsButton.background}
      borderRadius={PropsButton.borderRadius}
      className="bgbtn"
    >
      <StyleButtton
        size={PropsButton.size}
        className="bgbtn__btn"
        cursor={PropsButton.cursor}
        color={PropsButton.color}
        fontSize={PropsButton.fontSize}
        fontWeight={PropsButton.fontWeight}
        disabled={PropsButton.disabled}
        width={PropsButton.width}
        border={PropsButton.border}
        height={PropsButton.height}
        borderRadius={PropsButton.borderRadius}
        onClick={handleClick}
      >
        {PropsButton.text}
        {PropsButton.children}
      </StyleButtton>
    </StyleDiv>
  );
};
export default Button;
