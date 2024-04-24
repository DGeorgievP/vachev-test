import {
  StyledImageContainer,
  StyledContainer,
  StyledTextContainer,
  StyledDescription,
  StyledTitle,
} from "./elements.tsx";
import Image from "next/image";
import React from "react";
import AgencyChoice from "../../components/AgencyChoice/AgencyChoice.tsx";

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
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{heading}</StyledDescription>
      </StyledTextContainer>
      <StyledImageContainer>
        <Image
          layout="responsive"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </StyledImageContainer>
      <AgencyChoice
        title="Brief"
        heading="Complete brief writing or simple guidance on what to include, we've got you covered."
        icon={{
          src: "/resources/brief.png.webp",
          alt: "breief",
        }}
      />
      <AgencyChoice
        title="Search"
        heading="In-depth agency search covering; criteria matching, door knocking and due-diligence vetting,"
        icon={{
          src: "/resources/brief.png.webp",
          alt: "breief",
        }}
      />
      <AgencyChoice
        title="Pitch"
        heading="Comprehensive pitch management, including comms, diary management and pitch hosting."
        icon={{
          src: "/resources/brief.png.webp",
          alt: "breief",
        }}
      />
    </StyledContainer>
  );
};
