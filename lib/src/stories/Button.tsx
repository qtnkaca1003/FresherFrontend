import React, { MouseEventHandler } from "react";
import styled from "styled-components";
interface IButton {
  title: string;
  bghover?: string;
  disabled?: boolean;
  color?: string;
  bg?: string;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
const StyledButton = styled.button<IButton>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
      ? "9px 30px 11px"
      : "14px 30px 16px"};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${(props) =>  props.bghover};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: ${(props) =>
      props.size === "small"
        ? "5px 23px 6px"
        : props.size === "medium"
        ? "7px 28px 9px"
        : "12px 28px 14px"};
  }
`;

export const Button = (props: IButton) => {
  return (
    <>
      {" "}
      <StyledButton
        type="button"
        onClick={props.onClick}
        size={props.size}
        disabled={props.disabled}
        title={props.title}
        bg={props.bg}
        color={props.color}
        bghover={props.bghover}
      >
        {props.title}
      </StyledButton>
    </>
  );
};
