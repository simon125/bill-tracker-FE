import React from "react";
import styled from "styled-components";
import { Card } from "components";
import { Datatable, Select } from "components";

const StyledTableButton = styled.button`
  cursor: pointer;
  opacity: 0;
  transition: 0.15s all;
  background: none;
  border: none;

  tr:hover & {
    opacity: 1;
  }
`;

interface TableButtonProps {
  onClick(): void;
  icon: string;
}

const TableButton: React.FC<TableButtonProps> = ({ onClick, icon }) => {
  return (
    <StyledTableButton onClick={onClick}>
      {" "}
      <img src={icon} alt="button" />
    </StyledTableButton>
  );
};

const DragIcon = styled.img`
  cursor: grab;
  position: relative;
  top: 2px;
  opacity: 0;
  transition: 0.15s all;

  tr:hover & {
    opacity: 1;
  }
`;

const data = [
  {
    id: Math.random(),
    name: "ksjdfhkadf",
    price: "34",
  },
  {
    id: Math.random(),
    name: "ksjdfhkadf",
    price: "34",
  },
  {
    id: Math.random(),
    name: "ksjdfhkadf",
    price: "34",
  },
  {
    id: Math.random(),
    name: "ksjdfhkadf",
    price: "34",
  },
  {
    id: Math.random(),
    name: "ksjdfhkadf",
    price: "34",
  },
  {
    id: Math.random(),
    name: "ksjdfhkadf",
    price: "34",
  },
  {
    id: Math.random(),
    name: "ksjdfhkadf",
    price: "34",
  },
  {
    id: Math.random(),
    name: "ksjdfhkadf",
    price: "34",
  },
  {
    id: Math.random(),
    name: "ksjdfhkadf",
    price: "34",
  },
  {
    id: Math.random(),
    name: "ksjdfhkadf",
    price: "34",
  },
  {
    id: Math.random(),
    name: "ksjdfhkadf",
    price: "34",
  },
  {
    id: Math.random(),
    name: "ksjdfhkadf",
    price: "34",
  },
  {
    id: Math.random(),
    name: "ksjdfhkadf",
    price: "34",
  },
  {
    id: Math.random(),
    name: "ksjdfhkadf",
    price: "34",
  },
  {
    id: Math.random(),
    name: "ksjdfhkadf",
    price: "34",
  },
  {
    id: Math.random(),
    name: "ksjdfhkadf",
    price: "34",
  },
];

export const ExpensesSummary: React.FC = () => {
  return (
    <Card heading="Expenses Summary" style={{ overflowY: "auto", height: 200 }}>
      <Datatable<{
        id: number;
        name: string;
        price: string;
      }>
        header={[
          { label: "Expense type", action: (label) => console.log(label) },
          { label: "Total price" },
        ]}
        columns={[
          { name: "name", width: "36%" },
          { name: "price", width: "24%" },
        ]}
        propertyAsKey="id"
        data={data}
      />
    </Card>
  );
};
