import { Button, Card, Input } from "components";
import React from "react";

export const RequiredForm: React.FC = () => {
  return (
    <Card heading="Required Data">
      <Input label="NAME" id="expenseName" name="expenseName" />
      <Input label="PRICE" id="expenseName" name="expenseName" />
      <Input
        label="DATE"
        id="expenseName"
        name="expenseName"
        inputWrapperStyle={{ marginBottom: 0 }}
      />
    </Card>
  );
};
