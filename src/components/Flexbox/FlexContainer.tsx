import styled from "styled-components";

import { space } from "style/spacing";

export const FlexContainer = styled.div`
  display: flex;
  & > * + * {
    margin-left: 25px;
  }

  ${space}
`;
