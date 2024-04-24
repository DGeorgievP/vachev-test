import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "../../components";

import React from "react";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  display: flex;
  flex-direction: column;
`;

// export const StyledGetStartedBtn = styled((props) => (
//   <Button {...props} variant="contained" color="main" />
// ))`
//   margin-top: 4.375rem;
//   padding-top: 0;
//   padding-bottom: 0;
// `;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  display: flex;
  flex-direction: row;
  color: black;
  white-space: nowrap;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 1.563rem 0 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 30%;
  margin-left: 11.125rem;
  font-family: sans-serif;
  align-items: center
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-top: 5%
`;
