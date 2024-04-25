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
  align-items: center;
  background-image: url('/img/background.png');
  background-size: cover; 
  background-position: center; 
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  display: flex;
  color: black;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  display: flex;
  padding-bottom: 2%;
  align-items: center;
  justify-content: center;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 30%;
  font-family: sans-serif;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
`;
