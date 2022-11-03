import React from "react";
import { Wrapper } from "./Button.style";

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
