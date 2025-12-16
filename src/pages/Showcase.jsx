import { PageLayout } from "../components/PageLayout";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";

export const Showcase = () => {
  return (
    <PageLayout pageId="showcase">
      <SkillsSection />
      <ProjectsSection />
    </PageLayout>
  );
};
