import { PageLayout } from "../components/PageLayout";
import { ExperienceSection } from "../components/ExperienceSection";
import { ClassTimeline } from "../components/ClassTimeline";

export const Experience = () => {
  return (
    <PageLayout pageId="experience">
      <ExperienceSection />
      <ClassTimeline />
    </PageLayout>
  );
};
