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
  icon: HTMLImageElement
}

const agencyChoiceBriefProps = {
  title: "Brief",
  heading: "Complete brief writing or simple guidance on what to include, we've got you covered.",
  icon: { src: "/img/brief.png", alt: "", width: 10, height: 16 },
}

const agencyChoiceSearchProps = {
  title: "Search",
  heading: "In-depth agency search covering; criteria matching, door knocking and due-diligence vetting.",
  icon: { src: "/img/search.png", alt: "", width: 10, height: 16 },
}

const agencyChoicePitchProps = {
  title: "Pitch",
  heading: "Comprehensive pitch management, including comms, diary management and pitch hosting.",
  icon: { src: "/img/pitch.png", alt: "", width: 10, height: 16 },
}

export const AgencySelection: React.FC<AgencySelectionProps> = ({
  title,
  heading,
  icon
}) => {
  return (
    <StyledContainer>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{heading}</StyledDescription>
      </StyledTextContainer>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <StyledImageContainer>
        <Image
            layout="responsive"
            src={icon.src}
            alt={icon.alt}
            width={icon.width}
            height={icon.height}
          />
        </StyledImageContainer>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <AgencyChoice
            {...agencyChoiceBriefProps}
          />
           <AgencyChoice
            {...agencyChoiceSearchProps}
          />
           <AgencyChoice
           {...agencyChoicePitchProps}
          />  
        </div>
      </div>
    </StyledContainer>
  );
};
