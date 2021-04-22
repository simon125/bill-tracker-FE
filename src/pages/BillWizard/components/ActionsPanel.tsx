import React from "react";

interface ActionsPanelProps {
  onSaveDraftClick(): void;
  onAddExpenseClick(): void;
  onCancelClick(): void;
}

export const ActionsPanel: React.FC<ActionsPanelProps> = ({
  onSaveDraftClick,
  onAddExpenseClick,
  onCancelClick,
}) => {
  return <div></div>;
};
