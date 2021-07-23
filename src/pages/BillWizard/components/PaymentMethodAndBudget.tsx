import { Card, Select } from "components";
import React from "react";

export const PaymentMethodAndBudget: React.FC = () => {
  return (
    <Card heading="Details">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "48%" }}>
          <Select
            placeholder="Payment method"
            options={[
              { label: "test1", value: "TEST1" },
              { label: "test22", value: "TEST22" },
              { label: "test3", value: "TEST3" },
            ]}
            value={""}
            onSelect={() => ({})}
          />
        </div>
        <div style={{ width: "48%" }}>
          <Select
            placeholder="Budget"
            options={[
              { label: "test1", value: "TEST1" },
              { label: "test2", value: "TEST2" },
              { label: "test3", value: "TEST3" },
            ]}
            value={""}
            onSelect={() => ({})}
          />
        </div>
      </div>
    </Card>
  );
};
