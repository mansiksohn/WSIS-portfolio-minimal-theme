import React from "react";
import { AboutSection, Page, Seo } from 'gatsby-theme-portfolio-minimal';

export default function FirstPage() {
    return (
        <>
            <Seo title="FirstPage" />
            <Page useSplashScreenAnimation>
                <AboutSection sectionId="about" heading="About Portfolio Minimal" />
            </Page>
        </>
    );
}