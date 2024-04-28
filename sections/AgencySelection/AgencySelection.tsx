import {
  StyledImageContainer,
  StyledContainer,
  StyledTextContainer,
  StyledDescription,
  StyledTitle,
  ChoiceAndImageContainer,
} from "./elements.tsx";
import Image from "next/image";
import React from "react";
import AgencyChoice, { AgencyChoiceProps } from "../../components/AgencyChoice/AgencyChoice.tsx";

interface AgencySelectionProps {
  title: string,
  heading: string,
  icon: HTMLImageElement,
  agencyChoiceCards: AgencyChoiceProps[],
}

export const AgencySelection: React.FC<AgencySelectionProps> = ({
  title,
  heading,
  icon,
  agencyChoiceCards,
}) => {
  return (
    <StyledContainer>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{heading}</StyledDescription>
      </StyledTextContainer>
      <ChoiceAndImageContainer>
        <StyledImageContainer>
          <Image
            layout="responsive"
            src={icon.src}
            alt={icon.alt}
            width={icon.width}
            height={icon.height}
          />
        </StyledImageContainer>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            gap: "45px",
            justifyContent: "center",
          }}
        >
          {agencyChoiceCards && agencyChoiceCards.map((agencyChoiceCard: AgencyChoiceProps, key: number) => (
            <AgencyChoice key={key} {...agencyChoiceCard} />
          ))}
        </div>
      </ChoiceAndImageContainer>
    </StyledContainer>
  );
};
