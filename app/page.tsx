import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Kushi Groups Tavarekere | Premium Home Building Services",
  description:
    "From basement to dream home — complete construction solutions with premium materials and experienced engineers.",
  alternates: {
    canonical: "/",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kushi Groups Tavarekere",
  url: "https://khushiconstruction.com",
  inLanguage: "en-IN",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsGrid showAll={false} />
      <ProcessTimeline />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
