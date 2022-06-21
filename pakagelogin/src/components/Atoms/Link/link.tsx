import React, { ReactNode } from "react";
import styled from "styled-components";
import "./link.scss";
interface ILink {
  text?: string;
  href?: string;
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
  textAlign?: "center" | "left" | "right";
}
const StyledLink = styled.a<ILink>((props) => ({
  href:props.href,
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
      fontSize={PropsLink.fontSize}
      fontWeight={PropsLink.fontWeight}
      fontFamily={PropsLink.fontFamily}
      color={PropsLink.color}
      textAlign={PropsLink.textAlign}
      textDecoration={PropsLink.textDecoration}
      className="link"
      href={PropsLink.href}
    >
      {PropsLink.children}
    </StyledLink>
  );
};
export default Link;
