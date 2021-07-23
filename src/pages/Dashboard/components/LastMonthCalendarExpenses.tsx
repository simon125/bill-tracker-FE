import React from "react";
import { Card, Calendar } from "components";

const DATA = [
  { value: 10, id: "123123" },
  { value: 12, id: "1231asd23" },
  { value: 30, id: "123qweq123" },
  { value: 12590.99, id: "12asdasww3123" },
  { value: 10.11, id: "vsdvsd323" },

  { value: 10, id: "123123" },
  { value: 12, id: "1231asd23" },
  { value: 30, id: "123qweq123" },
  { value: 12590.99, id: "12asdasww3123" },
  { value: 10.11, id: "vsdvsd323" },

  { value: 10, id: "123123" },
  { value: 12, id: "1231asd23" },
  { value: 30, id: "123qweq123" },
  { value: 12590.99, id: "12asdasww3123" },
  { value: 10.11, id: "vsdvsd323" },

  { value: 10, id: "123123" },
  { value: 12, id: "1231asd23" },
  { value: 30, id: "123qweq123" },
  { value: 12590.99, id: "12asdasww3123" },
  { value: 10.11, id: "vsdvsd323" },

  { value: 10, id: "123123" },
  { value: 12, id: "1231asd23" },
  { value: 30, id: "123qweq123" },
  { value: 12590.99, id: "12asdasww3123" },
  { value: 10.11, id: "vsdvsd323" },

  { value: 10, id: "123123" },
  { value: 12, id: "1231asd23" },
  { value: 30, id: "123qweq123" },
  { value: 12590.99, id: "12asdasww3123" },
  { value: 10.11, id: "vsdvsd323" },
];

interface LastMonthCalendarExpensesProps {}

export const LastMonthCalendarExpenses: React.FC<LastMonthCalendarExpensesProps> =
  () => {
    const handleDayClick = (test: unknown) => {
      console.log(test);
    };
    return (
      <Card
        heading="Last month expenses"
        style={{ height: "100%", marginBottom: 10 }}
      >
        <Calendar data={DATA} onDayClick={handleDayClick} />
      </Card>
    );
  };
