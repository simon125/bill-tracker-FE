import React from "react";
import styled from "styled-components";

const TableRow = styled.tr`
  transition: 0.15s all;

  display: table;
  width: 100%;

  &:hover {
    background: #eeeeee22;
  }
`;

const TableCell = styled.td`
  border-bottom: 1px solid #eee;
  padding: 6px 0 6px 4px;
  text-align: left;
`;

interface DatatableRowProps<T> {
  rowData: T;
  columns: Array<{ name: keyof T; width?: string }>;
}

export const DatatableRow = <T extends {}>({
  rowData,
  columns,
}: DatatableRowProps<T>) => {
  return (
    <TableRow draggable="true">
      {columns.map((column, idx) => (
        <TableCell key={idx} style={{ width: column.width }}>
          {rowData[column.name]}
        </TableCell>
      ))}
    </TableRow>
  );
};
