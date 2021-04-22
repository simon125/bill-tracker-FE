import React from "react";
import styled from "styled-components";

enum ButtonType {
  OUTLINE_DARK = "",
  OUTLINE_LIGHT = "",
  DARK = "",
  LIGHT_DARK = "",
}

interface StyledButtonProps {
  mode: ButtonType;
}

const StyledButton = styled.button<StyledButtonProps>``;

interface ButtonProps {
  label: string;
  mode?: ButtonType;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  mode = ButtonType.DARK,
}) => {
  return <StyledButton mode={mode}>{label}</StyledButton>;
};
