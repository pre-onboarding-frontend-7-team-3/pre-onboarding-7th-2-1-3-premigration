import styled from "styled-components";
import React from "react";

const Button = ({ children, ...props }) => {
  return <MnBtn {...props}>{children}</MnBtn>;
};

export default Button;

const MnBtn = styled.button`
  color: ${({ Color }) => Color || "black"};
  background-color: ${({ backgroundColor }) => backgroundColor || "transparent"};
  height: 2rem;
`;
