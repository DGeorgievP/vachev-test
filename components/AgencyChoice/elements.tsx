import styled from "styled-components";

export const StyledAgencySelection = styled.div`
  display: flex;
  align-items: center;
  background: #ececec;
  padding: 40px;
  border-radius: 8px;
  border: 2px solid transparent; 
  transition: border-color 0.3s ease; 
  &:hover {
    border: 2px solid blue;
  }
  
`;

export const StyledIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 20px;
 
`;

export const StyledContent = styled.div`
  flex: 1;
  width: 100%
  height: 100%
  display: -webkit-box;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  
`;

export const StyledTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
  color: #000;
  &:hover {
    color: #00f;
    text-decoration: underline;
    cursor: default;
  }
  
`;

export const StyledHeading = styled.p`
  font-size: 14px;
  color: #555;
  
`;
