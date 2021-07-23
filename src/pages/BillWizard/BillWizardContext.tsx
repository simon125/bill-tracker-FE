import {
  useCreateExpense,
  useUpdateExpense,
} from "hooks/api/usePrivateRequest";
import React, { createContext, useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IBillWizardContext {}

const BillWizardContext = createContext<IBillWizardContext>(
  {} as IBillWizardContext
);

export const useBillWizard = () => {
  const context = useContext(BillWizardContext);

  if (!context) {
    throw new Error("Something went wrong!");
  }

  return context;
};

type InputField = {
  value: string;
  error: null | string;
};

type ParticularExpense = {
  id: string;
  uuid?: string;
  name: string;
  price: string;
  amount: string;
};

type ExpenseGroup = {
  uuid: string;
  expenseType: string;
  expenses: Array<ParticularExpense>;
};

interface IExpenseWizard {
  reqName: InputField;
  reqPrice: InputField;
  reqDate: InputField;
  expenseImages: Array<string>; // in the future some error feedback ??
  optBudget: InputField;
  optPaymentMethod: InputField;
  expenseGroups: Array<ExpenseGroup>;
}

export const BillWizardProvider: React.FC = ({ children }) => {
  // Required
  //     const [name, setName] = useState('');
  //     const [price, setPrice] = useState('');
  //     const [date, setDate] = useState('');
  // // Optional
  //     const []
  //     const [particularExpenseName, setParticularExpenseName] = useState('');
  //     const [particularExpensePrice, setParticularExpensePrice] = useState('');
  //     const [particularExpenseAmount, setParticularExpenseAmount] = useState('');

  //   const { createExpense } = useCreateExpense();
  //   const { updateExpense } = useUpdateExpense();
  //   const [state, dispatch] = useReducer(reducer, initialState);

  const value = {};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(123123);
  };

  return (
    <BillWizardContext.Provider value={value}>
      {/* probably move it to BillWizard */}
      <form onSubmit={handleSubmit}>{children}</form>
    </BillWizardContext.Provider>
  );
};
