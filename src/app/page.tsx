import Hero from "@/components/Hero";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import WhyChoose from "@/components/Choose";
import Benefits from "@/components/Benefits/Benefits";
import ProblemSection from "@/components/Problem";
import HowItWorks from "@/components/How";
import FeatureOverview from "@/components/Features";
import TransformationSection from "@/components/Transformation";
import EmotionalSection from "@/components/Emotional";
import FAQ from "@/components/FAQ";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <ProblemSection />
        <FeatureOverview />
        <WhyChoose />
        <HowItWorks />
        <TransformationSection />
        <EmotionalSection />
        <Benefits />
        <FAQ />
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
