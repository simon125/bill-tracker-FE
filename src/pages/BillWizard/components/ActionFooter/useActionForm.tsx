import { useBillWizardContext } from "contexts/BillWizardContext";

export const useActionForm = () => {
  const { operations } = useBillWizardContext();

  const handleSubmit = () => {
    operations.submitForm();
  };

  const handleCancel = () => {
    operations.setBillImages([]);
    operations.setBillName("");
    operations.setTotalPrice("");
    operations.setTransactionDate("");
    operations.setPaymentMethod({ id: "", label: "" });
    operations.setNote("");
    operations.setExpenseItem(new Map());
  };

  return {
    handleSubmit,
    handleCancel,
  };
};
