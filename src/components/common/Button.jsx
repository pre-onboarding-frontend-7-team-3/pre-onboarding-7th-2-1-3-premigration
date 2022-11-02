import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};

  /* Style */
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};

  box-sizing: border-box;
  border: none;
  border-radius: ${(props) => props.borderRadius};

  color: ${(props) => props.color};
  border-color: ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor};

  transition: filter 0.2s ease;

  cursor: pointer;
`;

const Button = ({
  type = "button",
  variant = "normal",
  width = "62px",
  height = "27px",
  margin = 0,
  padding = 0,
  fontSize = "14px",
  fontWeight = "700",
  borderRadius = "0px",
  borderColor = (props) => props.theme.BLACK,
  color = (props) => props.theme.BLACK,
  backgroundColor = (props) => props.theme.GRAY,
  disabled = false,
  children,
  onClick,
  ...props
}) => {
  return (
    <Wrapper
      type={type}
      variant={variant}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      fontSize={fontSize}
      fontWeight={fontWeight}
      borderRadius={borderRadius}
      borderColor={borderColor}
      color={color}
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
