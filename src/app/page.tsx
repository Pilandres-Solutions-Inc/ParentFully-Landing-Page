import Hero from "@/components/Hero";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import WhyChoose from "@/components/Choose";
import Benefits from "@/components/Benefits/Benefits";
import { WhatIsParentfullySection } from "@/components/what";
import ProblemSection from "@/components/Problem";
import WhyDifferent from "@/components/why-section";
import HowItWorks from "@/components/How";
import FeatureOverview from "@/components/Features";
import TransformationSection from "@/components/Transformation";
import EmotionalSection from "@/components/Emotional";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <WhatIsParentfullySection />
        <Benefits />
        <WhyChoose />
        <ProblemSection />
        <WhyDifferent />
        <HowItWorks />
        <FeatureOverview />
        <TransformationSection />
        <EmotionalSection />
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
