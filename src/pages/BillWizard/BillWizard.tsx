import React, { useCallback } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { ExpenseImages } from "./components/ExpenseImages";
import { OptionalForm } from "./components/OptionalForm";
import { PaymentMethodAndBudget } from "./components/PaymentMethodAndBudget";
import { RequiredForm } from "./components/RequiredForm/RequiredForm";
import { SingleExpenseTypeGrid } from "./components/SingleExpenseTypeGrid";
import { SingleExpenseTypeGrid1 } from "./components/SingleExpenseTypeGrid1";

import { Button, Card, Input } from "components";

import { FlexContainer } from "components/Flexbox/FlexContainer";
import { FormTypePicker } from "./components/FormTypePicker";
import { ExpensesSummary } from "./components/ExpensesSummary";
import { NoteInput } from "./components/NoteInput";
import { Masonry } from "components/Layout";
import { useBillWizardContext } from "contexts/BillWizardContext";
import { ActionFooter } from "./components/ActionFooter/ActionFooter";

export enum FormType {
  QUICK_ADD,
  ADD_WITH_DETAILS,
}

const Heading = styled.h2`
  background: #314150;
  font-size: 1.8rem;
  font-weight: 400;
  text-align: center;
  color: #fff;
  padding: 10px;
  margin-bottom: 25px;
`;

export const BillWizard: React.FC = () => {
  const { models, operations } = useBillWizardContext();
  const { id } = useParams<{ id: string }>();

  // const [selectedType, setSelectedType] = React.useState<FormType>(
  //   FormType.QUICK_ADD
  // );

  const handleChangeFormType = useCallback(
    (formType: FormType) => {
      operations.setFormType(formType);
    },
    [operations]
  );

  const showDetailForm = models.formType === FormType.ADD_WITH_DETAILS;

  return (
    <>
      <FlexContainer mb="25px">
        <FormTypePicker
          selectedType={models.formType}
          handleChange={handleChangeFormType}
        />
      </FlexContainer>
      <FlexContainer>
        <RequiredForm />
        <ExpenseImages />
      </FlexContainer>
      {showDetailForm && (
        <>
          <Heading>Details</Heading>
          <FlexContainer>
            <PaymentMethodAndBudget />
            <NoteInput />
          </FlexContainer>

          <FlexContainer>
            <OptionalForm />
            <ExpensesSummary />
          </FlexContainer>

          <Masonry breakpointCols={2}>
            {Array.from(models.expenseItems).map((expenseItem) => {
              return (
                <>
                  {expenseItem[0]}
                  {expenseItem[1]}
                  {/* [0] name, [1] items */}
                </>
              );
            })}
            {/* <Card>
              <SingleExpenseTypeGrid />
            </Card>
            <Card>
              <SingleExpenseTypeGrid1 />
            </Card>
            <Card>
              <SingleExpenseTypeGrid />
            </Card>
            <Card>
              <SingleExpenseTypeGrid />
            </Card>
            <Card>
              <SingleExpenseTypeGrid />
            </Card> */}
          </Masonry>
        </>
      )}

      <ComponentWithComposition></ComponentWithComposition>

      <ActionFooter />
    </>
  );
};

const ComponentWithComposition: React.FC = ({ children }) => {
  const [counter, setCounter] = React.useState(1);

  console.log("parnet render");
  return (
    <div>
      <p>
        <ChildCMP />
        jakaś liczba: {counter}{" "}
        <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
        <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
        {children}
      </p>
    </div>
  );
};

const ChildCMP: React.FC = () => {
  console.log("child render");
  return (
    <div>
      <p>Child</p>
    </div>
  );
};






