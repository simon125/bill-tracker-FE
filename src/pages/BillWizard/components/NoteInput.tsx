import React from "react";
import { Card, Input } from "components";

export const NoteInput: React.FC = () => {
  return (
    <Card heading="Notes">
      <Input id="notes" label="Notes" name="notes" />
    </Card>
  );
};
