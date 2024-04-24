import React from "react";
import Image from "next/image"; 
import {
  StyledAgencySelection,
  StyledIcon,
  StyledContent,
  StyledTitle,
  StyledHeading,
} from "./elements.tsx";

interface AgencyChoiceProps {
  title: string;
  heading: string;
  icon: { src: string; alt: string }; 
}

const AgencyChoice: React.FC<AgencyChoiceProps> = ({
  title,
  heading,
  icon,
}) => {
  return (
    <StyledAgencySelection>
      <StyledIcon>
        <Image src={icon.src} alt={icon.alt} width={100} height={100} />
      </StyledIcon>
      <StyledContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledHeading>{heading}</StyledHeading>
      </StyledContent>
    </StyledAgencySelection>
  );
};

export default AgencyChoice;
