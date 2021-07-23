import React from "react";
import styled from "styled-components";

type ButtonMode =
  | "outline-dark"
  | "outline-light"
  | "dark"
  | "light-dark"
  | "light";

const COLOR = {
  "outline-dark": "#1D212A",
  "outline-light": "#eee",
  dark: "#1D212A",
  "light-dark": "#2C3A47",
  light: "#1D212A",
};

const BG = {
  "outline-dark": "transparent",
  "outline-light": "transparent",
  dark: "#1D212A",
  "light-dark": "#2C3A47",
  light: "#eee",
};

interface StyledButtonProps {
  mode: ButtonMode;
  block: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 6px 20px;
  width: ${({ block }) => (block ? "100%" : "auto")};
  height: 37px;

  display: inline-block;
  white-space: nowrap;
  background: ${({ mode }) => BG[mode]};
  border: ${({ mode }) => (mode === "light" ? "#eee" : COLOR[mode])} 1px solid;
  color: ${({ mode }) =>
    ["outline-dark", "light"].includes(mode) ? "#1D212A" : "#eee"};

  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
  }
`;

interface ButtonProps {
  label: string;
  block?: boolean;
  mode?: ButtonMode;
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  type?: "submit" | "button" | "reset";
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  mode = "dark",
  block = false,
  onClick,
  children,
  type = "button",
  style,
}) => {
  return (
    <StyledButton
      style={style}
      type={type}
      block={block}
      onClick={onClick}
      mode={mode}
    >
      {label}
      {children}
    </StyledButton>
  );
};
