import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { PageLayout } from "../components/PageLayout";

export const Home = () => {
  return (
    <PageLayout pageId="home">
      <HeroSection />
      <AboutSection />
    </PageLayout>
  );
};
