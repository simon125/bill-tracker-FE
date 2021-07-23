import React from "react";

export const OverlayWithContent: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.7)",
        zIndex: 1000000,
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "30vh",
          maxHeight: "70vh",
          background: "#2C3A47",
          zIndex: 1000000,
        }}
      ></div>
    </div>
  );
};
