import { Card } from "components";
import React from "react";

export const ExpenseImages: React.FC = () => {
  return (
    <Card heading="Bill Image/s" style={{ height: "235px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img style={{ marginBottom: 20 }} src="/icons/drop-icon.svg" alt="" />
        <p style={{ textAlign: "center", color: "#eee" }}>
          Drop file or click to open browser
        </p>
      </div>
      {/* <FileInput label="NAME" id="expenseName" name="expenseName" /> */}
    </Card>
  );
};
