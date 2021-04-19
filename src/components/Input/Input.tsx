import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 30px;
  position: relative;
  transition: all 0.5s;
`;

const FloatingLablel = styled.label<{ hasError: boolean }>`
  position: absolute;
  color: ${({ hasError }) => (hasError ? "red" : "#afafaf")};
  top: 7px;
  left: 10px;
  font-size: 1.2rem;
  font-weight: bolder;
  transition: all 0.3s;
`;

const StyledInput = styled.input<{ hasError: boolean }>`
  /* margin-top: 13px; */
  background: rgba(255, 255, 255, 0.15);
  border: none;
  height: 30px;
  padding: 10px;
  color: white;
  width: 100%;
  outline: none;

  &:focus,
  &:not(:placeholder-shown) {
    border-bottom: ${({ hasError }) =>
      hasError ? "1px solid red" : " 1px solid #34b2b4"};
  }

  border-bottom: ${({ hasError }) =>
    hasError ? "1px solid red" : "1px solid transparent"};

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translate(-14px, -25px) scale(0.9);
    font-size: 1.2rem;
    color: ${({ hasError }) => (hasError ? "red" : "#34b2b4")};
  }
`;

const ErrorMessage = styled.span`
  position: absolute;
  z-index: 1000;
  top: 29px;
  left: 0;
  font-size: 1.1rem;
  color: red;
  font-weight: bolder;
`;

interface InputPorps {
  label: string;
  name: string;
  id: string;
  type?: string;
  inputRef?:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null;
  inputWrapperStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  error?: string;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputPorps> = ({
  label,
  inputWrapperStyle,
  name,
  id,
  inputRef,
  type = "text",
  error,
  onInput,
}) => {
  // TODO: some unexpected rerender consider React.memo
  return (
    <InputWrapper style={inputWrapperStyle}>
      <StyledInput
        hasError={!!error}
        autoComplete="off"
        ref={inputRef}
        type={type}
        name={name}
        id={id}
        style={{}}
        placeholder=" "
        // onChange={onInput}
      />
      <FloatingLablel htmlFor={name} style={{}} hasError={!!error}>
        {label}
      </FloatingLablel>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};
