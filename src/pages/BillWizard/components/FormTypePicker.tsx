import React from "react";
import { TileRadioButton } from "components/TileRadioButton/TileRadioButton";

import { ReactComponent as DocumentIcon } from "assets/icons/documents.svg";
import { ReactComponent as BoltIcon } from "assets/icons/bolt.svg";
import { FormType } from "../BillWizard";

interface FormTypePickerProps {
  selectedType: FormType;
  handleChange: (formType: FormType) => void;
}

export const FormTypePicker: React.FC<FormTypePickerProps> = ({
  selectedType,
  handleChange,
}) => {
  const handleChangeWrapper = (value: string | number) => {
    handleChange(value as FormType);
  };
  return (
    <>
      <TileRadioButton
        name="formType"
        checked={selectedType === FormType.QUICK_ADD}
        value={FormType.QUICK_ADD}
        icon={<BoltIcon />}
        heading={"Quick add"}
        label={
          "Don’t care about details at all or just now? Enter name, total price and date of transaction and rest you can complete later"
        }
        onChange={handleChangeWrapper}
      />

      <TileRadioButton
        name="formType"
        checked={selectedType === FormType.ADD_WITH_DETAILS}
        value={FormType.ADD_WITH_DETAILS}
        icon={<DocumentIcon />}
        heading={"Add with details"}
        label={
          "Create complete entry to gain good insight to stats. Enter details of transaction. You can save incomplete entry as a DRAFT"
        }
        onChange={handleChangeWrapper}
      />
    </>
  );
};
