import { StyledImageContainer, StyledContainer } from "../Hero/elements";
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
  image
}) => {
  return (
    <StyledContainer>
      <StyledImageContainer>
        <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
      </StyledImageContainer>
      <h1>{title}</h1>
      <h2>{heading}</h2>
    </StyledContainer>
  );
};
