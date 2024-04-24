import {
  StyledImageContainer,
  StyledContainer,
  StyledTextContainer,
  StyledDescription,
  StyledTitle,
} from "./elements.tsx";
import Image from "next/image";
import React from "react";

interface AgencySelectionProps {
  title: string;
  heading: string;
  image: HTMLImageElement;
}

export const AgencySelection: React.FC<AgencySelectionProps> = ({
  title,
  heading,
  image,
}) => {
  return (
    <StyledContainer>
      <StyledImageContainer>
        <Image
          layout="responsive"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </StyledImageContainer>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{heading}</StyledDescription>
      </StyledTextContainer>
    </StyledContainer>
  );
};
