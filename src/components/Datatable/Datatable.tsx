import React from "react";
import styled from "styled-components";
import { DatatableRow } from "./DatatableRow";

export type CustomObject = Record<string, string | number | React.ReactNode>;

const StyledDatatable = styled.table`
  width: 100%;
  border-collapse: collapse;
  /* table-layout: fixed; */
`;

const DatatableHead = styled.thead`
  display: block;
`;

const TableHeadRow = styled.th`
  text-align: left;
  border-bottom: 2px solid #eee;

  display: table;
  width: 100%;
`;

const TBody = styled.tbody<{maxHeight?: string}>`
  display: block; 
  max-height: ${({maxHeight})=>maxHeight}; 
  overflow-y: auto;
`

interface DatatableProps<T> {
  data: Array<T>;
  header: Array<{ label?: string; action?(label: string): void }>;
  columns: Array<{ name: keyof T; width?: string }>;
  propertyAsKey: keyof T;
  maxHeight?: string;
}

// export const Datatable: React.FC<DatatableProps<T>> = ({
export const Datatable = <T extends {}>(props: DatatableProps<T>) => {
  const { data, header, columns, propertyAsKey, maxHeight } = props;
  return (
    <StyledDatatable>
      <DatatableHead>
        <TableHeadRow>
          {header.map((cell, idx) => {
            return (
              <th
                key={idx}
                tabIndex={cell.action ? 0 : undefined}
                style={{
                  cursor: cell.action ? "pointer" : "auto",
                  paddingBottom: 5,
                }}
                onClick={() => cell.action && cell.action(cell.label || "")}
              >
                {cell.label || ""}
              </th>
            );
          })}
        </TableHeadRow>
      </DatatableHead>
      <TBody maxHeight={maxHeight}>
        {data.map((rowData) => (
          <DatatableRow<T>
            key={(rowData[propertyAsKey] as unknown) as string}
            rowData={rowData}
            columns={columns}
          />
        ))}
      </TBody>
    </StyledDatatable>
  );
};

/**
 * 
 *   <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{
                borderBottom: "solid 1px #eee",
                fontWeight: 500,
                textAlign: "left",
              }}
            ></th>
            <th
              style={{
                borderBottom: "solid 1px #eee",
                fontWeight: 500,
                textAlign: "left",
              }}
            >
              Name
            </th>
            <th
              style={{
                borderBottom: "solid 1px #eee",
                fontWeight: 500,
                textAlign: "left",
              }}
            >
              Price
            </th>
            <th
              style={{
                borderBottom: "solid 1px #eee",
                fontWeight: 500,
                textAlign: "left",
              }}
            >
              Amount
            </th>
            <th
              style={{
                borderBottom: "solid 1px #eee",
                fontWeight: 500,
                textAlign: "left",
              }}
            ></th>
            <th
              style={{
                borderBottom: "solid 1px #eee",
                fontWeight: 500,
                textAlign: "left",
              }}
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              <img src="/icons/drag-dots.svg" alt="drag dots" />
            </td>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              Milk
            </td>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              25
            </td>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              10
            </td>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              <img src="/icons/pen.svg" alt="drag dots" />
            </td>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              <img src="/icons/trash.svg" alt="drag dots" />
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              <img src="/icons/drag-dots.svg" alt="drag dots" />
            </td>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              Milk
            </td>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              25
            </td>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              10
            </td>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              <img src="/icons/pen.svg" alt="drag dots" />
            </td>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              <img src="/icons/trash.svg" alt="drag dots" />
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              <img src="/icons/drag-dots.svg" alt="drag dots" />
            </td>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              Milk
            </td>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              25
            </td>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              10
            </td>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              <img src="/icons/pen.svg" alt="drag dots" />
            </td>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              <img src="/icons/trash.svg" alt="drag dots" />
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              <img src="/icons/drag-dots.svg" alt="drag dots" />
            </td>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              Milk
            </td>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              25
            </td>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              10
            </td>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              <img src="/icons/pen.svg" alt="drag dots" />
            </td>
            <td
              style={{
                padding: "5px 0 5px 0",
                borderBottom: "solid 1px #eee",
              }}
            >
              <img src="/icons/trash.svg" alt="drag dots" />
            </td>
          </tr>
        </tbody>
      </table>
 */
