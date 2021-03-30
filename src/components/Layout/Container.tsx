import React from "react";

interface ContainerProps {
  padding?: string;
  margin?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  margin,
  padding = "20px",
  children,
}) => {
  return (
    <div style={{ padding, margin, marginLeft: "auto", marginRight: "auto" }}>
      {children}
    </div>
  );
};
