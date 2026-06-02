import Hero from "@/components/Hero";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import Benefits from "@/components/Benefits/Benefits";
import ProblemSection from "@/components/Problem";
import HowItWorks from "@/components/How";
import FeatureOverview from "@/components/Features";
import TransformationSection from "@/components/Transformation";
import FAQ from "@/components/FAQ";
import WhyDifferent from "@/components/why-section";
import EverydayActionSection from "@/components/Important";
import WhoItsFor from "@/components/Choose";
import Testimonials from "@/components/Testimonials";
import Struggling from "@/components/Struggling";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <FeatureOverview />
        <WhoItsFor />
        <Struggling />
        <EverydayActionSection/>
        <TransformationSection />
        <ProblemSection />
        <HowItWorks />
        <WhyDifferent />
        <Benefits />
        <Testimonials />
        <FAQ />
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
