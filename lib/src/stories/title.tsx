import React from "react";
import styled from "styled-components";
interface ITitle {
  title: string;
  color?: string;
}
const StyledTitle = styled.h1<ITitle>`
  font-weight: 700;
  font-weight: bold;
  display: inline-block;
  font-size: 30px;
  color: ${(props) => props.color};
`;
export const Title = (props: ITitle) => {
  return (
    <StyledTitle title={props.title} color={props.color}>
      {props.title}
      
    </StyledTitle>
  );
};
