import React, { ReactNode } from "react";
import styled from "styled-components";
import "./title.scss"
interface ITitle {
  text?: string;
  children?: ReactNode;
  textAlign?: "left" | "center" | "right";
  padding?: string;
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
  fontFamily?: string;
}
const StyledTitle = styled.h1<ITitle>((props) => ({
  fontSize: props.fontSize,
  fontFamily: props.fontFamily,
  padding: props.padding,
  color: props.color,
  textAlign: props.textAlign,
}));

const Title = (PropsTitle: ITitle) => {
  return (
    <StyledTitle
      className="title"
      textAlign={PropsTitle.textAlign}
      padding={PropsTitle.padding}
      color={PropsTitle.color}
      fontSize={PropsTitle.fontSize}
      fontWeight={PropsTitle.fontWeight}
      fontFamily={PropsTitle.fontFamily}
    >
      {PropsTitle.text}
      {PropsTitle.children}
    </StyledTitle>
  );
};
export default Title;
