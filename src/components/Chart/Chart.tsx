import React from "react";
import { Doughnut } from "react-chartjs-2";

interface ChartProps {
  values: Array<string | number>;
  labels: Array<string>;
}

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: true,
      position: "right",
    },
  },
};

export const Chart: React.FC<ChartProps> = ({ labels, values }) => {
  return (
    <div style={{ position: "relative", width: "75%", margin: "0 auto" }}>
      <Doughnut options={options} data={data} type="doughnut" />
    </div>
  );
};
