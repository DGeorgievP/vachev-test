import React from "react";
import Image from "next/image";
import {
  StyledAgencySelection,
  StyledIcon,
  StyledContent,
  StyledTitle,
} from "./elements.tsx";

export interface AgencyChoiceProps {
  title: string;
  heading: string | JSX.Element;
  icon: IconProps;
}
interface IconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const AgencyChoice: React.FC<AgencyChoiceProps> = ({
  title,
  heading,
  icon,
}) => {
  return (
    <StyledAgencySelection>
      <StyledIcon>
        <Image
          layout="responsive"
          src={icon.src}
          alt={icon.alt}
          width={icon.width}
          height={icon.height}
        />
      </StyledIcon>
      <StyledContent>
        <StyledTitle>{title}</StyledTitle>
        {heading}
      </StyledContent>
    </StyledAgencySelection>
  );
};

export default AgencyChoice;
