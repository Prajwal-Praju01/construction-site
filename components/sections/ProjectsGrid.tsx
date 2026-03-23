"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, X, Ruler, Clock, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import type { Project } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";

function ProjectCard({ project, index, onOpen }: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onClick={() => onOpen(project)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer border border-primary/10 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1.5"
    >
      <div className="relative h-64 sm:h-72">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-white text-xs font-heading font-semibold px-3 py-1.5 rounded-full shadow-lg ring-2 ring-white/20">
            {project.category}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-heading font-bold text-white text-lg mb-1.5 group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent" /> {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-accent" /> {project.year}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl border border-primary/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-72">
          <Image src={project.image} alt={project.title} fill className="object-cover" sizes="672px" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors border border-white/30"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6">
            <span className="bg-accent text-white text-xs font-heading font-semibold px-3 py-1.5 rounded-full mb-2 inline-block">
              {project.category}
            </span>
            <h3 className="font-heading font-bold text-white text-2xl">{project.title}</h3>
          </div>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-4 mb-4">
            {[
              { icon: MapPin, label: project.location },
              { icon: Calendar, label: String(project.year) },
              ...(project.area ? [{ icon: Ruler, label: project.area }] : []),
              ...(project.duration ? [{ icon: Clock, label: project.duration }] : []),
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-gray-600 text-sm bg-construction-light px-3 py-1.5 rounded-full">
                <Icon className="w-4 h-4 text-accent" />
                {label}
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-heading font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-xl"
            onClick={onClose}
          >
            Build Something Similar
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface ProjectsGridProps {
  showAll?: boolean;
}

export function ProjectsGrid({ showAll = false }: ProjectsGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const displayed = showAll ? PROJECTS : PROJECTS.slice(0, 6);

  return (
    <section className="section-padding bg-construction-light relative overflow-hidden" id="projects">
      <div className="absolute inset-0 section-grid-bg opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Our Portfolio"
          title='Featured <span class="text-accent">Projects</span>'
          subtitle="Every home we build is a testament to our craftsmanship, precision, and commitment to excellence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
