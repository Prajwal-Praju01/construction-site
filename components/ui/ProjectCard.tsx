"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Calendar, Expand } from "lucide-react";
import type { Project } from "@/types";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="group relative overflow-hidden rounded-2xl cursor-pointer"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        onClick={() => setModalOpen(true)}
      >
        {/* Image */}
        <div className="relative h-72 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

          {/* Category badge */}
          <span className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            {project.category}
          </span>

          {/* Expand icon on hover */}
          <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Expand className="w-5 h-5 text-white" />
          </div>

          {/* Info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-heading font-bold text-xl text-white mb-1 group-hover:text-accent transition-colors duration-200">
              {project.title}
            </h3>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-white/80 text-sm">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5 text-white/80 text-sm">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                {project.year}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <ProjectModal
        project={project}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
