import { RadioButton } from "components/RadioButton/RadioButton";
import React, { useEffect } from "react";
import { LARGE_SCREEN, MEDIUM_SCREEN } from 'style/rwdBreakboints';
import styled from "styled-components";

const TileContainer = styled.div<{ checked: boolean }>`
  padding: 10px;
  width: 200px;
  background: #2c3a47;
  outline: ${({ checked }) => (checked ? "3px solid #fff" : "none")};

  cursor: pointer;

  * {
    cursor: pointer;
  }

  @media screen and (min-width: ${MEDIUM_SCREEN}) {
    padding: 20px;
    width: 400px;
  } 
`;

const Heading = styled.h2`
  font-weight: 400;
`;

const Subheading = styled.p`
  font-size: 1rem;
  display: none;


  @media screen and (min-width: ${MEDIUM_SCREEN}) {
    display: flex;
  } 
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;




 

`;

interface TileRadioButtonProps {
  value: string | number;
  checked: boolean;
  heading: string;
  label: string;
  icon: React.ReactNode;
  name?: string;
  onChange?: (value: string | number) => void;
}

export const TileRadioButton: React.FC<TileRadioButtonProps> = ({
  value,
  checked,
  heading,
  label,
  icon,
  name,
  onChange,
}) => {
  return (
    <TileContainer
      onClick={() => {
        onChange && onChange(value);
      }}
      checked={checked}
      tabIndex={1}
    >
      <Label htmlFor={label}>
        <RadioButton name={name} checked={checked} value={value} />
        <div style={{display: 'flex', alignItems: 'center'}}>
        <span style={{ margin: "0 5px 0 10px" }}>{icon}</span>
        <div>
          <Heading>{heading}</Heading>
          <Subheading>{label}</Subheading>
        </div>
          
        </div>
      </Label>
    </TileContainer>
  );
};
