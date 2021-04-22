import React from "react";
import { Card, Button } from "components";

export const Expenses: React.FC = () => {
  return (
    <div>
      {/* <Button label="Dark" />
      <Button label="Dark" />
      <Button label="Outline" />
      <Button label="Dark" /> */}

      {new Array(200)
        .fill({ name: "Name", date: "12-12-2022", price: 20 })
        .map((el, idx) => {
          return (
            <Card key={idx} heading={el.name}>
              <span>{el.date}</span>
              <span>{el.price}</span>
            </Card>
          );
        })}
    </div>
  );
};
