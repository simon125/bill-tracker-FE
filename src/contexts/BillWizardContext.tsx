import { FormType } from "pages";
import React, { useContext, createContext, useState } from "react";
import { useAuthAxios } from "./AuthAxiosContext";

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
const {get, post} = useAuthAxios();

  const mutation = useMutation(newTodo => post('/todos', newTodo))


  /* Metadata */
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>();
  const [budget, setBudget] = useState<PaymentMethod[]>();
  const [expenseTypes, setExpenseTypes] = useState<PaymentMethod[]>();

  const [formType, setFormType] = useState<FormType>(FormType.QUICK_ADD);

  /* Quick add */
  const [billName, setBillName] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<string>("");
  // TODO: move it to Date type
  const [transactionDate, setTransactionDate] = useState<string>("");

  /* Add with details */
  const [billImages, setBillImages] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>({
    id: "selectPaymentMethod",
    label: "",
  });
  const [note, setNote] = useState<string>("");
  const [expenseItems, setExpenseItem] = useState<Map<string, ExpenseItem[]>>(
    new Map()
  );

  const submitForm = () => {

    


    console.log();
    // validation
    // send request or info about validation
  };

  return {
    models: {
      formType,
      billName,
      totalPrice,
      transactionDate,
      paymentMethods,
      billImages,
      paymentMethod,
      note,
      expenseItems,
    },
    operations: {
      submitForm,
      setFormType,
      setBillName,
      setTotalPrice,
      setTransactionDate,
      setBillImages,
      setPaymentMethod,
      setNote,
      setExpenseItem,
    },
  };
};

type IBillWizard = ReturnType<typeof useBillWizard>;

export const BillWizardProvider: React.FC = ({ children }) => {
  const value = useBillWizard();

  return (
    <BillWizardContext.Provider value={value}>
      {children}
    </BillWizardContext.Provider>
  );
};

export const useBillWizardContext = () => {
  const context = useContext(BillWizardContext);

  if (!context) {
    throw new Error(
      "BillWizardContext must be used within an BillWizardContextProvider"
    );
  }

  return context;
};
