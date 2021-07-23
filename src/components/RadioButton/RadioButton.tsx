import React from "react";
import styled from "styled-components";

const StyledRadioButton = styled.label<{ isDisabled?: boolean }>`
  border: 1.5px solid
    ${({ isDisabled }) => (isDisabled ? "#aaaaaaaa" : "#efefef")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  min-width: 21px;
  max-width: 21px;
  height: 21px;
  cursor: ${({ isDisabled }) => (isDisabled ? "auto" : "pointer")};
  margin: 50;

  &:hover {
    border: 1.5px solid
      ${({ isDisabled }) => (isDisabled ? "#aaaaaaaa" : "#fff")};
  }

  input + span {
    opacity: 0;
  }

  input:checked + span {
    opacity: 1;
  }
`;

const StyledRadioButtonIndicator = styled.span<{
  isDisabled?: boolean;
}>`
  background: ${({ isDisabled }) => (isDisabled ? "#aaaaaaaa" : "#fff")};
  border-radius: 50%;
  width: 11px;
  height: 11px;
  display: block;
  cursor: ${({ isDisabled }) => (isDisabled ? "auto" : "pointer")};
`;

interface RadioButtonProps {
  checked?: boolean;
  name?: string;
  value?: string | number;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  checked,
  value = "",
  disabled = false,
  name,
  onChange,
}) => {
  return (
    <StyledRadioButton
      isDisabled={false}
      style={{ cursor: disabled ? "auto" : "pointer" }}
    >
      <input
        onChange={onChange}
        value={value}
        checked={checked}
        type="radio"
        name={name}
        hidden
      />
      <StyledRadioButtonIndicator
        isDisabled={disabled}
      ></StyledRadioButtonIndicator>
    </StyledRadioButton>
  );
};
