import React from "react";

export const Expenses: React.FC = () => {
  return (
    <div>
      {new Array(200)
        .fill({ name: "Name", date: "12-12-2022", price: 20 })
        .map((el, idx) => {
          return (
            <div
              key={idx}
              style={{
                background: "white",
                width: "50%",
                padding: 20,
                margin: 50,
              }}
            >
              <span>{el.name}</span>
              <span>{el.date}</span>
              <span>{el.price}</span>
            </div>
          );
        })}
    </div>
  );
};
