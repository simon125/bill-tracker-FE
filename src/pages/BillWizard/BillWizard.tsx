import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { ExpenseImages } from "./components/ExpenseImages";
import { OptionalForm } from "./components/OptionalForm";
import { PaymentMethodAndBudget } from "./components/PaymentMethodAndBudget";
import { RequiredForm } from "./components/RequiredForm";
import { SingleExpenseTypeGrid } from "./components/SingleExpenseTypeGrid";
import { SingleExpenseTypeGrid1 } from "./components/SingleExpenseTypeGrid1";
import { BillWizardProvider, useBillWizard } from "./BillWizardContext";
import { Button, Card, Input } from "components";

import { FlexContainer } from "components/Flexbox/FlexContainer";
import { FormTypePicker } from "./components/FormTypePicker";
import { ExpensesSummary } from "./components/ExpensesSummary";
import { NoteInput } from "./components/NoteInput";
import { Masonry123 } from "components/Layout";

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
  const {} = useBillWizard();
  const { id } = useParams<{ id: string }>();

  const [selectedType, setSelectedType] = React.useState<FormType>(
    FormType.QUICK_ADD
  );

  const handleChangeFormType = (formType: FormType) => {
    setSelectedType(formType);
  };

  const showDetailForm = selectedType === FormType.ADD_WITH_DETAILS;

  return (
    <BillWizardProvider>
      <FlexContainer mb="25px">
        <FormTypePicker
          selectedType={selectedType}
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

          <Masonry123 breakpointCols={2}>
            <Card>
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
            </Card>
          </Masonry123>
        </>
      )}
    </BillWizardProvider>
  );
};
