import React, { useCallback } from "react";
import { useBillWizardContext } from "contexts/BillWizardContext";
import { FormType } from "pages/BillWizard/BillWizard";

type FormEvent = React.FormEvent<HTMLInputElement>;

export const useRequiredForm = () => {
  const { models, operations } = useBillWizardContext();
  const { billName, totalPrice, transactionDate } = models;

  const handleNameChange = (e: FormEvent) => {
    operations.setBillName(e.currentTarget.value);
  };

  const handlePriceChange = (e: FormEvent) => {
    if (models.formType === FormType.QUICK_ADD) {
      operations.setTotalPrice(e.currentTarget.value);
    }
    // in other case total price is computed from particular expenses
  };

  const handleDateChange = (e: FormEvent) => {
    operations.setTransactionDate(e.currentTarget.value);
  };

  return {
    billName,
    totalPrice,
    transactionDate,
    handleNameChange,
    handlePriceChange,
    handleDateChange,
  };
};
