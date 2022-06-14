import React, { ReactNode } from "react";
import styled from "styled-components";
import "./input.scss";
interface IInput {
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  placeholder?: string;
  textlebel?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;

  outline?: string;
  border?: string;
  fontFamily?: string;
  fontSize?: string;
  color?: string;
  lineHeight?: string;
  display?: string;
  width?: string;
  height?: string;
  background?: string;
  padding?: string;
}

const StyleInput = styled.input<IInput>((props) => ({
  outline: props.outline,

  border: props.border,
  fontFamily: props.fontFamily,
  fontSize: props.fontSize,
  color: props.color,
  lineHeight: props.lineHeight,
  display: props.display,
  width: props.width,
  height: props.height,
  background: props.background,
  padding: props.padding,
}));
const Input = (PropsInput: IInput) => {
  return (
    <StyleInput
      outline={PropsInput.outline}
      border={PropsInput.border}
      fontFamily={PropsInput.fontFamily}
      fontSize={PropsInput.fontSize}
      color={PropsInput.color}
      lineHeight={PropsInput.lineHeight}
      display={PropsInput.display}
      width={PropsInput.width}
      height={PropsInput.height}
      background={PropsInput.background}
      padding={PropsInput.padding}
      className={`${PropsInput.className} input`}
      placeholder={PropsInput.placeholder}
      type={PropsInput.type}
    />
  );
};
export default Input;
