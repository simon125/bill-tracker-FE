import React from "react";
import styled from "styled-components";
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

export const SingleExpenseTypeGrid1: React.FC = () => {
  return (
    <>
      <div style={{ width: "29%", marginBottom: 30 }}>
        <Select
          options={[
            { label: "test1", value: "TEST1" },
            { label: "test2", value: "TEST2" },
            { label: "test3", value: "TEST3" },
          ]}
          value={"null"}
          onSelect={() => ({})}
        />
      </div>
      <Datatable<{
        id: number;
        name: string;
        price: string;
        amount: string;
        edit: JSX.Element;
        delete: JSX.Element;
        drag: JSX.Element;
      }>
        header={[
          { label: "" },
          { label: "Name", action: (label) => console.log(label) },
          { label: "Price" },
          { label: "Amount" },
          { label: "" },
          { label: "" },
        ]}
        columns={[
          { name: "drag", width: "5%" },
          { name: "name", width: "36%" },
          { name: "price", width: "24%" },
          { name: "amount", width: "24%" },
          { name: "edit", width: "5.5%" },
          { name: "delete", width: "5.5%" },
        ]}
        propertyAsKey="id"
        data={[
          {
            id: Math.random(),
            drag: (
              <DragIcon
                draggable="true"
                src="/icons/drag-dots.svg"
                alt="drag"
              />
            ),
            name: "ksjdfhkadf",
            price: "34",
            amount: "34",
            edit: (
              <TableButton
                onClick={() => console.log(123)}
                icon="/icons/pen.svg"
              />
            ),
            delete: (
              <TableButton
                onClick={() => console.log(123)}
                icon="/icons/trash.svg"
              />
            ),
          },
          {
            id: Math.random(),
            drag: (
              <DragIcon
                draggable="true"
                src="/icons/drag-dots.svg"
                alt="drag"
              />
            ),
            name: "ksjdfhkadf",
            price: "34",
            amount: "34",
            edit: (
              <TableButton
                onClick={() => console.log(123)}
                icon="/icons/pen.svg"
              />
            ),
            delete: (
              <TableButton
                onClick={() => console.log(123)}
                icon="/icons/trash.svg"
              />
            ),
          },
          {
            id: Math.random(),
            drag: (
              <DragIcon
                draggable="true"
                src="/icons/drag-dots.svg"
                alt="drag"
              />
            ),
            name: "ksjdfhkadf",
            price: "34",
            amount: "34",
            edit: (
              <TableButton
                onClick={() => console.log(123)}
                icon="/icons/pen.svg"
              />
            ),
            delete: (
              <TableButton
                onClick={() => console.log(123)}
                icon="/icons/trash.svg"
              />
            ),
          },
          {
            id: Math.random(),
            drag: (
              <DragIcon
                draggable="true"
                src="/icons/drag-dots.svg"
                alt="drag"
              />
            ),
            name: "ksjdfhkadf",
            price: "34",
            amount: "34",
            edit: (
              <TableButton
                onClick={() => console.log(123)}
                icon="/icons/pen.svg"
              />
            ),
            delete: (
              <TableButton
                onClick={() => console.log(123)}
                icon="/icons/trash.svg"
              />
            ),
          },
          {
            id: Math.random(),
            drag: (
              <DragIcon
                draggable="true"
                src="/icons/drag-dots.svg"
                alt="drag"
              />
            ),
            name: "ksjdfhkadf",
            price: "34",
            amount: "34",
            edit: (
              <TableButton
                onClick={() => console.log(123)}
                icon="/icons/pen.svg"
              />
            ),
            delete: (
              <TableButton
                onClick={() => console.log(123)}
                icon="/icons/trash.svg"
              />
            ),
          },
          {
            id: Math.random(),
            drag: (
              <DragIcon
                draggable="true"
                src="/icons/drag-dots.svg"
                alt="drag"
              />
            ),
            name: "ksjdfhkadf",
            price: "34",
            amount: "34",
            edit: (
              <TableButton
                onClick={() => console.log(123)}
                icon="/icons/pen.svg"
              />
            ),
            delete: (
              <TableButton
                onClick={() => console.log(123)}
                icon="/icons/trash.svg"
              />
            ),
          },
          {
            id: Math.random(),
            drag: (
              <DragIcon
                draggable="true"
                src="/icons/drag-dots.svg"
                alt="drag"
              />
            ),
            name: "ksjdfhkadf",
            price: "34",
            amount: "34",
            edit: (
              <TableButton
                onClick={() => console.log(123)}
                icon="/icons/pen.svg"
              />
            ),
            delete: (
              <TableButton
                onClick={() => console.log(123)}
                icon="/icons/trash.svg"
              />
            ),
          },
          {
            id: Math.random(),
            drag: (
              <DragIcon
                draggable="true"
                src="/icons/drag-dots.svg"
                alt="drag"
              />
            ),
            name: "ksjdfhkadf",
            price: "34",
            amount: "34",
            edit: (
              <TableButton
                onClick={() => console.log(123)}
                icon="/icons/pen.svg"
              />
            ),
            delete: (
              <TableButton
                onClick={() => console.log(123)}
                icon="/icons/trash.svg"
              />
            ),
          },
          {
            id: Math.random(),
            drag: (
              <DragIcon
                draggable="true"
                src="/icons/drag-dots.svg"
                alt="drag"
              />
            ),
            name: "ksjdfhkadf",
            price: "34",
            amount: "34",
            edit: (
              <TableButton
                onClick={() => console.log(123)}
                icon="/icons/pen.svg"
              />
            ),
            delete: (
              <TableButton
                onClick={() => console.log(123)}
                icon="/icons/trash.svg"
              />
            ),
          },
        ]}
      />
    </>
  );
};
