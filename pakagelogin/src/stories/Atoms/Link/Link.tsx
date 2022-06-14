import React, { ReactNode } from "react";
import styled from "styled-components";
import "./link.scss";
interface ILink {
  text?: string;
  link?: string;
  textDecoration?: "none" | string;
  fontFamily?: string;
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
  fontSize?: string;
  lineHeight?: string;
  color?: string;
  children?: ReactNode;
  textAlign?: "left" | "center" | "right";
}
const StyledLink = styled.a<ILink>((props) => ({
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  fontFamily: props.fontFamily,
  lineHeight: props.lineHeight,
  color: props.color,
  textAlign: props.textAlign,
  textDecoration: props.textDecoration,
}));
const Link = (PropsLink: ILink) => {
  return (
    <StyledLink
      textAlign={PropsLink.textAlign}
      fontSize={PropsLink.fontSize}
      fontWeight={PropsLink.fontWeight}
      fontFamily={PropsLink.fontFamily}
      color={PropsLink.color}
      textDecoration={PropsLink.textDecoration}
      className="link"
      href={PropsLink.link}
    >
      {PropsLink.text}
      {PropsLink.children}
    </StyledLink>
  );
};
export default Link;
