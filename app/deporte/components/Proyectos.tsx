"use client";

import ProjectCard from "@/app/inmobiliarias/components/ProjectCard";
import { projects } from "../projects";

export default function Proyectos() {
  return (
    <section className="pb-28 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-black mb-14">
          Trabajos destacados
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

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

      </div>

    </section>
  );
}
