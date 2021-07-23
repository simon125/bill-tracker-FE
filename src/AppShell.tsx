import React from "react";
import styled from "styled-components";
import { Sidebar, Header } from "components";
import { LARGE_SCREEN, SMALL_SCREEN } from "style/rwdBreakboints";

const AppContainer = styled.div`
  display: flex;
  min-height: 100%;
  background: #1d212a;
`;

const AppContent = styled.main`
  min-height: 100%;
  width: 100%;
  margin-top: 70px;
  padding-bottom: 70px;
  padding: 10px;

  @media screen and (min-width: ${SMALL_SCREEN}) {
    padding: 20px;
  }

  @media screen and (min-width: ${LARGE_SCREEN}) {
    padding: 40px;
    padding-left: 180px;
  }
`;

export const AppShell: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <AppContainer>
        <Sidebar />
        <AppContent>{children}</AppContent>
      </AppContainer>
    </>
  );
};
