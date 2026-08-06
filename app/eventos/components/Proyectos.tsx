"use client";

import { projects } from "../projects";
import ProjectCard from "@/app/inmobiliarias/components/ProjectCard";

export default function Proyectos() {
  return (
    <section className="py-20 px-6">

      <div className="max-w-7xl mx-auto space-y-20">

        {projects.map((project) => (
          <ProjectCard
            key={project.href}
            title={project.title}
            location={project.location}
            description={project.description}
            video={project.video}
            href={project.href}
          />
        ))}

      </div>

    </section>
  );
}