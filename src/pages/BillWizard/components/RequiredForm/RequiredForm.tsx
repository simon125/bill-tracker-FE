import React from "react";
import { Button, Card, Input } from "components";
import { useRequiredForm } from "./useRequiredForm";

export const RequiredForm: React.FC = () => {
  const {
    billName,
    totalPrice,
    transactionDate,
    handleNameChange,
    handlePriceChange,
    handleDateChange,
  } = useRequiredForm();

  return (
    <Card heading="Required Data">
      <Input
        value={billName}
        onChange={handleNameChange}
        label="NAME"
        id="expenseName"
        name="expenseName"
      />
      <Input
        value={totalPrice}
        onChange={handlePriceChange}
        label="PRICE"
        id="expenseName"
        name="expenseName"
      />
      <Input
        value={transactionDate}
        onChange={handleDateChange}
        label="DATE"
        id="expenseName"
        name="expenseName"
        inputWrapperStyle={{ marginBottom: 0 }}
      />
    </Card>
  );
};
