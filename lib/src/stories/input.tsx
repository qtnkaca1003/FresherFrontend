import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

export interface IInput {
  id?: string;
  label?: string;
  error?: boolean;
  message?: string;
  success?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const StyledInput = styled.input<IInput>`
  height: 40px;
  width: 300px;
  border-radius: 3px;
  border: solid 2px
    ${(props) =>
      props.disabled
        ? "#e4e3ea"
        : props.error
        ? "#a9150b"
        : props.success
        ? "#067d68"
        : "#353637"};
  background-color: #fff;
  &:focus {
    border: solid 2px #1b116e;
  }
`;

const StyledLabel = styled.div<IInput>`
  font-size: 14px;
  color: ${(props) => (props.disabled ? "#e4e3ea" : "#080808")};
  padding-bottom: 6px;
`;

const StyledMessage = styled.div<IInput>`
  font-size: 14px;
  color: #a9150b8;
  padding-top: 4px;
`;

const StyledText = styled.p<IInput>`
  margin: 0px;
  color: ${(props) =>
    props.disabled ? "#e4e3ea" : props.error ? "#a9150b" : "#080808"};
`;

export const Input = (props: IInput) => {
  return (
    <>
      <StyledLabel>
        <StyledText disabled={props.disabled} error={props.error}>
          {props.label}
        </StyledText>
      </StyledLabel>
      <StyledInput
        id={props.id}
        type="text"
        onChange={props.onChange}
        disabled={props.disabled}
        error={props.error}
        success={props.success}
        placeholder={props.placeholder}
      ></StyledInput>
      <StyledMessage>
        <StyledText error={props.error}>{props.message}</StyledText>
      </StyledMessage>
    </>
  );
};
