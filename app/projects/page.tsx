import type { Metadata } from "next";
import Image from "next/image";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import CTASection from "@/components/sections/CTASection";
import { PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Browse the Khushi Construction & Land Developers portfolio of completed homes and construction projects across Karnataka and Maharashtra.",
  alternates: {
    canonical: "/projects",
  },
};

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Construction Projects Portfolio",
  url: "https://khushiconstruction.com/projects",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: PROJECTS.map((project, index) => ({
      "@type": "CreativeWork",
      position: index + 1,
      name: project.title,
      description: project.description,
      contentLocation: project.location,
      url: `https://khushiconstruction.com/projects#${project.id}`,
      image: project.image.startsWith("http")
        ? project.image
        : `https://khushiconstruction.com${project.image}`,
    })),
  },
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80" alt="Projects" fill priority className="object-cover opacity-20" sizes="100vw" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Portfolio</p>
          <h1 className="font-heading font-black text-5xl md:text-6xl text-white leading-tight">
            Projects We&apos;re <span className="text-accent">Proud Of</span>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            340+ completed projects, each one built to the same uncompromising standard. Here are some of our favourites.
          </p>
        </div>
      </section>

      <ProjectsGrid showAll={true} />
      <CTASection />
    </>
  );
}
