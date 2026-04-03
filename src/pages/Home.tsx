import LandingNavbar from "@/components/landing/LandingNavbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import PipelinesSection from "@/components/landing/PipelinesSection";
import MetricsBar from "@/components/landing/MetricsBar";
import FeaturesSection from "@/components/landing/FeaturesSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import TechStackSection from "@/components/landing/TechStackSection";
import LandingFooter from "@/components/landing/LandingFooter";

const Home = () => (
  <div className="min-h-screen bg-landing-bg text-white overflow-x-hidden">
    <LandingNavbar />
    <HeroSection />
    <AboutSection /> 
    <PipelinesSection />
    <MetricsBar />
    <FeaturesSection />
    <UseCasesSection />
    <TechStackSection />
    <LandingFooter />
  </div>
);

export default Home;
