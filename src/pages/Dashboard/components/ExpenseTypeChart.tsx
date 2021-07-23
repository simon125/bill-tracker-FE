import { Card } from "components";
import { Chart } from "components/Chart/Chart";
import React from "react";

interface ExpenseTypeChartProps {}

export const ExpenseTypeChart: React.FC<ExpenseTypeChartProps> = () => {
  return (
    <Card
      heading="Expenses types in current month"
      style={{ height: "100%", marginBottom: 10 }}
    >
      <Chart
        labels={["rachunki", "spozywka", "paliwo", "gry", "slodycze"]}
        values={[1, 2, 12, 32, 1]}
      />
    </Card>
  );
};
