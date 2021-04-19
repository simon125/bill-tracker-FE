import React from "react";
import styled from "styled-components";
import { Sidebar, Header } from "components";

const AppContainer = styled.div`
  display: flex;
  margin-top: 70px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }
`;

const AppContent = styled.main`
  height: calc(100% - 70px);
  width: calc(100% - 100px);
`;

const SidebarContainer = styled.div`
  position: relative;
  width: 100px;

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`;

export const AppShell: React.FC = ({ children }) => {
  return (
    <>
      <Header />

      <AppContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <AppContent>{children}</AppContent>
      </AppContainer>
    </>
  );
};
