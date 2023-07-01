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
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <AboutSection sectionId="about" heading="About My Skills" />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="products" heading="Products" />
        <ContactSection sectionId="miscellaneous" heading="Miscellaneous" />
      </Page>
    </>
  );
}
