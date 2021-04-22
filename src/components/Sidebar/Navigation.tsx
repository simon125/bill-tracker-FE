import React from "react";
import { useAuth } from "contexts/AuthContext";
import { NavigationItem } from "./NavigationItem";

const NAV_ITEMS = [
  {
    iconName: "dashboard.svg",
    label: "Dashboard",
    path: "dashboard",
    bgColor: "#2FB5B6",
  },
  {
    iconName: "bill-editor.svg",
    label: "Add expense",
    path: "add-expense",
    bgColor: "#EF657C",
  },
  {
    iconName: "bills.svg",
    label: "Expenses",
    path: "expenses",
    bgColor: "#1E768A",
  },
  {
    iconName: "statistics.svg",
    label: "Statistics",
    path: "statistics",
    bgColor: "#84C2D7",
  },
  {
    iconName: "expense-types.svg",
    label: "Expense types",
    path: "expense-types",
    bgColor: "#1E768A",
  },
];

export const Navigation: React.FC = () => {
  const { setAuthState } = useAuth();

  const handleLogoutClick = () => {
    setAuthState({ newAccessToken: "", newExpiresAt: "", newRefreshToken: "" });
  };

  return (
    <nav style={{ height: "100%" }}>
      <ul style={{ height: "100%" }}>
        {NAV_ITEMS.map((navItemProps, idx) => (
          <NavigationItem key={idx} {...navItemProps} />
        ))}
        <NavigationItem
          action={handleLogoutClick}
          iconName="logout.svg"
          label="Log out"
          path="/"
          bgColor="#EF657C"
        />
      </ul>
    </nav>
  );
};
