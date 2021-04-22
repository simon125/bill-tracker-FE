import React, { createContext, useContext, useEffect, useState } from "react";

interface IMobileNavigationContext {
  isMobileNavOpen: boolean;
  setMobileNavigationState(isOpen: boolean): void;
}

const MobileNavigationContext = createContext<IMobileNavigationContext>(
  {} as IMobileNavigationContext
);

export const useMobileNavigation = () => {
  const context = useContext(MobileNavigationContext);

  if (!context) {
    throw new Error(
      "useMobileNavigation must be used within an MobileAppNavigationProvider"
    );
  }

  return context;
};

export const MobileAppNavigationProvider: React.FC = ({ children }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const setMobileNavigationState = (isOpen: boolean) => {
    setIsMobileNavOpen(isOpen);
  };

  useEffect(() => {
    document.body.style.overflowY = isMobileNavOpen ? "hidden" : "";
  }, [isMobileNavOpen]);

  const value = { isMobileNavOpen, setMobileNavigationState };

  return (
    <MobileNavigationContext.Provider value={value}>
      {children}
    </MobileNavigationContext.Provider>
  );
};
