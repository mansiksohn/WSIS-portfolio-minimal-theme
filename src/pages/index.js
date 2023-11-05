import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="What Should I Say?" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About" />
        <InterestsSection sectionId="interests" heading="Interests" />
        <ProjectsSection sectionId="products" heading="Products" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Blog']} />
        <ContactSection sectionId="miscellaneous" heading="Miscellaneous" />
      </Page>
    </>
  );
}
