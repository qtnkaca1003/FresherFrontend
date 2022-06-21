import React, { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import "./button.scss";
interface IButton {
  text?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  type: "button" | "reset" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  cursor?: string;
  fontSize?: string;
  color?: string;
  fontWeight?:
    | 500
    | 600
    | 700
    | 800
    | 900
    | "bold"
    | "bolder"
    | "lighter"
    | "normal"
    | "initial";
  border?: string;
  borderRadius?: string;
  background?: string;
  backgroundHover?: string;
}
const StyleButtton = styled.button<IButton>((props) => ({
  cursor: props.cursor,
  fontSize:
    props.size === "large" ? "16px" : props.size === "medium" ? "15px" : "14px",
  color: props.color,
  fontWeight: props.fontWeight,
  width:
    props.size === "large"
      ? "390px"
      : props.size === "medium"
      ? "300px"
      : "190px",
  height:
    props.size === "large" ? "50px" : props.size === "medium" ? "45px" : "40px",
  border: props.border,
  borderRadius: props.borderRadius,
  background: props.background,
}));

const StyleDivBgHiden = styled.div<IButton>((props) => ({
  width:
    props.size === "large"
      ? "390px"
      : props.size === "medium"
      ? "300px"
      : "190px",

  height:
    props.size === "large" ? "50px" : props.size === "medium" ? "45px" : "40px",
  borderRadius: props.borderRadius,
  background: props.background,
  backgroundHover: props.backgroundHover,
}));
const Button = (PropsButton: IButton) => {
  return (
    <StyleDivBgHiden
      type={PropsButton.type}
      size={PropsButton.size}
      background={PropsButton.background}
      borderRadius={PropsButton.borderRadius}
      className="bgbtn"
    >
      <StyleButtton
        type={PropsButton.type}
        size={PropsButton.size}
        className="bgbtn__btn"
        cursor={PropsButton.cursor}
        color={PropsButton.color}
        fontSize={PropsButton.fontSize}
        fontWeight={PropsButton.fontWeight}
        disabled={PropsButton.disabled}
        border={PropsButton.border}
        borderRadius={PropsButton.borderRadius}
        onClick={PropsButton.onClick}
      >
        {PropsButton.text}
        {PropsButton.children}
      </StyleButtton>
      <StyleDivBgHiden
        type={PropsButton.type}
        className="bgbtn__hiden"
        size={PropsButton.size}
        background={PropsButton.backgroundHover}
        borderRadius={PropsButton.borderRadius}
      />
    </StyleDivBgHiden>
  );
};
export default Button;
