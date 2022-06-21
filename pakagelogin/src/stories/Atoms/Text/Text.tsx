import React, { ReactNode } from "react";
import styled from "styled-components";
import "./text.scss"
interface IText {
  text?: string;
  children?: ReactNode;
  fontFamily?: string;
  fontSize?: string;
  lineHeight?: string;
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
  color?: string;
  textAlign?: "center" | "left" | "right";
  padding?: string;
}

const StyledText = styled.p<IText>((props) => ({
  fontSize: props.fontSize,
  fontFamily: props.fontFamily,
  lineHeight: props.lineHeight,
  fontWeight: props.fontWeight,
  color: props.color,
  textAlign: props.textAlign,
  padding: props.padding,
}));

const Text = (PropsText: IText) => {
  return (
    <StyledText
      className="text"
      fontSize={PropsText.fontSize}
      fontFamily={PropsText.fontFamily}
      lineHeight={PropsText.lineHeight}
      fontWeight={PropsText.fontWeight}
      color={PropsText.color}
      textAlign={PropsText.textAlign}
      padding={PropsText.padding}
    >
      {PropsText.children} {PropsText.text}
    </StyledText>
  );
};
export default Text;
