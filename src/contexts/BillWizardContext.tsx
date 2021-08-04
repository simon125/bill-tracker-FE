import { FormType } from "pages";
import React, { useContext, createContext, useState } from "react";

const BillWizardContext = createContext<IBillWizard | null>(null);

interface PaymentMethod {
  id: string;
  label: string;
}

interface ExpenseItem {
  id: string;
  name: string;
  price: string;
  amount: string;
}

const useBillWizard = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>();
  // const [paymentMethods, setP] = useState<PaymentMethod[]>();

  const [formType, setFormType] = useState<FormType>(FormType.QUICK_ADD);
  const [billName, setBillName] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<string>("");
  const [transactionDate, setTransactionDate] = useState<string>("");
  const [billImage, setBillImage] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>({
    id: "selectPaymentMethod",
    label: "",
  });
  const [note, setNote] = useState<string>("");

  const [expenseItems, setExpenseItem] = useState<Map<string, ExpenseItem[]>>(
    new Map()
  );

  return {
    models: {
      formType,
      billName,
      totalPrice,
      transactionDate,
      paymentMethods,
      billImage,
      paymentMethod,
      note,
      expenseItems,
    },
    operations: {
      setFormType,
      setBillName,
      setTotalPrice,
      setTransactionDate,
      setBillImage,
      setPaymentMethod,
      setNote,
      setExpenseItem,
    },
  };
};

type IBillWizard = ReturnType<typeof useBillWizard>;

export const AuthProvider: React.FC = ({ children }) => {
  const value = useBillWizard();

  return (
    <BillWizardContext.Provider value={value}>
      {children}
    </BillWizardContext.Provider>
  );
};

export const useBillWizardCtx = () => {
  const context = useContext(BillWizardContext);

  if (context === undefined) {
    throw new Error(
      "BillWizardContext must be used within an BillWizardContextProvider"
    );
  }

  return context;
};
