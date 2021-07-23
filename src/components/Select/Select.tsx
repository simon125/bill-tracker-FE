import { Button } from "components/Button/Button";
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

interface OptionsContainerProsp {
  isOpen: boolean;
}

const OptionsContainer = styled.div<OptionsContainerProsp>`
  position: absolute;
  z-index: 10000;
  width: 100%;
  top: 45px;
  left: 0;
  background: #2c3a47;
  border: #fff 1px solid;
  overflow-y: auto;

  max-height: 300px;

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0.6)};

  /* margin-top: ${({ isOpen }) => (isOpen ? "0" : "-10px")}; */
  visibility: ${({ isOpen }) => (isOpen ? "visble" : "hidden")};
  transition: all 0.1s ease-in-out;
`;

const Option = styled.div`
  padding: 10px;
  height: 100%;

  &:hover {
    background: #3d4b58;
  }
`;

const SelectedOption = styled(Option)``;

interface IOption {
  value: string;
  label: string | number;
}

interface SelectProps {
  options: IOption[];
  value: string | number;
  placeholder?: string;
  onSelect(): void;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  placeholder,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const node = useRef<HTMLDivElement | null>(null);

  const handleButtonClick = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  const handleClick = (e: MouseEvent) => {
    if (!(node.current as HTMLDivElement).contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%" }} ref={node}>
      <Button
        block
        onClick={handleButtonClick}
        label={(value as string) || placeholder || "Select option"}
        mode="outline-light"
      >
        <img
          src="/icons/arrow-down.svg"
          alt="arrow"
          style={{
            marginLeft: 5,
            transform: isOpen ? "rotate(-180deg)" : "",
            transition: "all 0.15s linear",
          }}
        />
      </Button>

      <OptionsContainer isOpen={isOpen}>
        {options.map((option) => {
          if (option.value === value) {
            return <SelectedOption>{option.label}</SelectedOption>;
          }
          return (
            <Option data-value={option.value} onClick={onSelect}>
              {option.label}
            </Option>
          );
        })}
      </OptionsContainer>
    </div>
  );
};
