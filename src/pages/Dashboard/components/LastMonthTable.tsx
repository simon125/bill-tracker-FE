import { Card, Datatable } from "components";
import styled from "styled-components";
import React from "react";

interface TableButtonProps {
  onClick(): void;
  icon: string;
}

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

const TableButton: React.FC<TableButtonProps> = ({ onClick, icon }) => {
  return (
    <StyledTableButton onClick={onClick}>
      {" "}
      <img src={icon} alt="button" />
    </StyledTableButton>
  );
};

export const LastMonthTable: React.FC = () => {
  return (
    <>
      <Card heading="Last month expenses">
        <Datatable<{
          id: number;
          name: string;
          date: string;
          price: string;
          show: JSX.Element;
        }>
          header={[
            { label: "Name" },
            { label: "Date" },
            { label: "Total Price" },
            { label: "" },
          ]}
          columns={[
            { name: "name", width: "36%" },
            { name: "date", width: "24%" },
            { name: "price", width: "24%" },
            { name: "show", width: "5.5%" },
          ]}
          propertyAsKey="id"
          data={[
            {
              id: Math.random(),
              name: "ksjdfhkadf",
              price: "34",
              date: "12-12-2021",
              show: (
                <TableButton
                  onClick={() => console.log(123)}
                  icon="/icons/trash.svg"
                />
              ),
            },
          ]}
        />
      </Card>
    </>
  );
};
