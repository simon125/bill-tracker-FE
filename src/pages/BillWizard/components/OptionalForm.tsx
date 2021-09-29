import { Button, Card, Input, Select } from "components";
import React from "react";

export const OptionalForm: React.FC = () => {
  return (
    <Card heading="Add Grouped Expense" style={{ height: 270 }}>
      <div style={{ width: "29%", margin: "10px 0 30px 0" }}>
        <Select
          options={[
            { label: "test1", value: "TEST1" },
            { label: "test2", value: "TEST2" },
            { label: "test3", value: "TEST3" },
          ]}
          value={"spożywasdasdafsdadscze"}
          onSelect={() => ({})}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "29%" }}>
          <Input
            value=""
            label="NAME"
            id="particularExpenseName"
            name="particularExpenseName"
          />
        </div>
        <div style={{ width: "29%" }}>
          <Input value="" label="PRICE" id="expenseName" name="expenseName" />
        </div>
        <div style={{ width: "29%" }}>
          <Input value="" label="AMOUNT" id="expenseName" name="expenseName" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div style={{ width: "29%", marginBottom: 10 }}>
          <Button mode="outline-light" label="Add Item" block />
        </div>
      </div>
    </Card>
  );
};
