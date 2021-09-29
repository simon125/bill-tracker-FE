import React from "react";
import { useActionForm } from "./useActionForm";

export const ActionFooter: React.FC = (props) => {
  const { handleSubmit, handleCancel } = useActionForm();
  const {} = props;
  return (
    <footer
      style={{
        width: "calc(100% - 150px)",
        height: 60,
        position: "fixed",
        bottom: 0,
        left: 150,
        background: "white",
      }}
    >
      <button>Submit</button>
      <button>Cancel</button>
    </footer>
  );
};
