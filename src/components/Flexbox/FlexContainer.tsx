import styled from "styled-components";

import { space } from "style/spacing";
import { LARGE_SCREEN } from 'style/rwdBreakboints';

export const FlexContainer = styled.div`
  display: flex;
  

flex-direction: column;


${space}


 @media screen and (min-width: ${LARGE_SCREEN}) {
  & > * + * {
    margin-left: 25px;
  }

flex-direction: row;

} 
`


/**
 * 
 X_LARGE_SCREEN
LARGE_SCREEN
MEDIUM_SCREEN
SMALL_SCREEN
 */