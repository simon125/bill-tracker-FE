import React from "react";
import styled from "styled-components";

const StyledHamburgerButton = styled.button`
  margin-top: 5px;
  background: transparent;
  border: none;
  position: relative;
  width: 50px;
  height: 30px;
  outline: none;
  cursor: pointer;
  z-index: 101;

  .item {
    border-top: solid 3px white;
    width: 38px;
    display: inline-block;
    position: absolute;
    left: 5px;
    transition: transform 0.3s, opacity 0.3s;
  }

  .item1 {
    top: 5px;
  }
  .item2 {
    top: 18px;
  }
  .item3 {
    top: 31px;
    width: 31px;
    transform: translateX(7px);
  }

  .item1.open {
    transform: rotate(45deg) translate(7px, 4px);
  }
  .item2.open {
    transform: rotate(-45deg) translate(5px, -2px);
  }
  .item3.open {
    opacity: 0;
    transform: translateX(23px);
  }
`;

interface HamburgerButtonProps {
  handleClick: () => void;
  open: boolean;
  color?: string;
  style?: React.CSSProperties;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  handleClick,
  open,
  color = "white",
  style,
}) => {
  const handleHamburgerButtonClick = () => {
    handleClick();
  };

  return (
    <StyledHamburgerButton onClick={handleHamburgerButtonClick} style={style}>
      <span
        style={{ borderColor: color }}
        className={`item item1 ${open && "open"}`}
      ></span>
      <span
        style={{ borderColor: color }}
        className={`item item2 ${open && "open"}`}
      ></span>
      <span
        style={{ borderColor: color }}
        className={`item item3 ${open && "open"}`}
      ></span>
    </StyledHamburgerButton>
  );
};
