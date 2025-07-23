import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import AchievementsGallery from "./sections/AchievementsGallery";
import SkillsSection from "./sections/SkillsSection";
import EducationSection from "./sections/EducationSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProfilesSection from "./sections/ProfilesSection";
import ContactSection from "./sections/ContactSection";
import LiveCodeReviewSection from "./sections/LiveCodeReviewSection";
import LiveWebPlaygroundSection from "./sections/LiveWebPlaygroundSection";
// import TestimonialsSection from "./sections/TestimonialsSection";
// import BlogSection from "./sections/BlogSection";
// import TimelineSection from "./sections/TimelineSection";
import ServicesSection from "./sections/ServicesSection";
import AwardsSection from "./sections/AwardsSection";
import CountersSection from "./sections/CountersSection";
// import SocialProofSection from "./sections/SocialProofSection";
import CaseStudySection from "./sections/CaseStudySection";
import ResumeCard from "./sections/ResumeCard";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-blue-950">
      <HeroSection />
      <AboutSection />
      <AchievementsGallery />
      <EducationSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ServicesSection />
      <ProfilesSection />
      <LiveWebPlaygroundSection />
      <LiveCodeReviewSection />
      <CountersSection />
      <CaseStudySection />
      <AwardsSection />
      {/* Future sections - commented for now */}
      {/* <SocialProofSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <TimelineSection /> */}
      {/* <BlogSection /> */}
      {/* Resume Card just above ContactSection */}
      <ResumeCard />
      <ContactSection />
    </main>
  );
}
