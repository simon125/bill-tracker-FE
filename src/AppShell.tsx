import React from "react";
import styled from "styled-components";
import { Sidebar, Header } from "components";
import { LARGE_SCREEN, SMALL_SCREEN } from "style/rwdBreakboints";

const AppContainer = styled.div`
  display: flex;
  margin-top: 70px;

  @media screen and (min-width: ${SMALL_SCREEN}) {
    margin-top: 100px;
  }
`;

const AppContent = styled.main`
  height: calc(100% - 70px);
  padding: 40px;
  width: 100%;

  @media screen and (min-width: ${SMALL_SCREEN}) {
    height: calc(100% - 100px);
  }

  @media screen and (min-width: ${LARGE_SCREEN}) {
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
