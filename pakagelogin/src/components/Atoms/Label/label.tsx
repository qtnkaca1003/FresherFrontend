import React, { ReactNode } from "react";
import styled from "styled-components";
import "./label.scss"
interface ILabel {
  text?: string;
  children?: ReactNode;
  className?: string;
  fontFamily?: string;
  fontSize?: string;
  color?: string;
  lineHeight?: string;
  padding?: string;
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
}
const StyleLabel = styled.span<ILabel>((props) => ({
  fontFamily: props.fontFamily,
  fontSize: props.fontSize,
  color: props.color,
  lineHeight: props.lineHeight,
  fontWeight: props.fontWeight,
  padding: props.padding,
}));
const Label = (PropsLabel: ILabel) => {
  return (
    <StyleLabel
      fontWeight={PropsLabel.fontWeight}
      fontFamily={PropsLabel.fontFamily}
      fontSize={PropsLabel.fontSize}
      color={PropsLabel.color}
      lineHeight={PropsLabel.lineHeight}
      padding={PropsLabel.padding}
      className={`${PropsLabel.className} label`}
    >
      {PropsLabel.children}
      {PropsLabel.text}
    </StyleLabel>
  );
};
export default Label;
