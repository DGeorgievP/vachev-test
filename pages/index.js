/* eslint-disable @next/next/no-page-custom-font */
import { Hero } from "../sections";
import { AgencySelection } from "../sections/AgencySelection";
import Head from 'next/head';

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const agencyChoiceBriefProps = {
  title: "Brief",
  heading:
    <p style={{ fontWeight: 'normal', fontSize: '16px'}}>Complete <span style={{fontWeight: 'bold'}}>brief writing or simple guidance</span> on what to include, we&apos;ve got your covered</p>,
  icon: { src: "/img/brief.png", alt: "", width: 20, height: 20 },
};

const agencyChoiceSearchProps = {
  title: "Search",
  heading:
    <p style={{fontWeight: 'normal', fontSize: '16px'}}>In-depth agency search covering;<span style={{ fontWeight: 'bold'}}> criteria matching</span>, door knocking and due-diligence vetting.</p>,
  icon: { src: "/img/search.png", alt: "", width: 20, height: 20 },
};

const agencyChoicePitchProps = {
  title: "Pitch",
  heading:
  <p style={{fontWeight: '400'}}> Comprehensive <span style={{fontWeight: 'bold'}}>pitch management</span>, including comms, diary management and pitch hosting.</p>,
  icon: { src: "/img/pitch.png", alt: "", width: 20, height: 20 },
};

const agencySelectionProps = {
  title: "Managed Agency Selection",
  heading: "Strengthen your onboarding process",
  icon: { src: "/img/video.png", alt: "", width: 1000, height: 1680 },
  agencyChoiceCards: [
    agencyChoiceBriefProps,
    agencyChoiceSearchProps,
    agencyChoicePitchProps,
  ],

}

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
          />
      </Head>
      <div>
        <Hero {...heroProps} />
        <AgencySelection {...agencySelectionProps}/>
      </div>
    </>
  );
}
