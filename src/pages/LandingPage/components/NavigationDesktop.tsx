import React from "react";

import { ANCHORS_CONFIG } from "../landingPageAnchorsConfigs";

export const NavigationDesktop: React.FC = () => {
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {ANCHORS_CONFIG.map((el) => (
        <li key={el.id}>{el.label}</li>
      ))}
    </ul>
  );
};
