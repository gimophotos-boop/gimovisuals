"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "../projects";

export default function Proyectos() {
  return (
    <section className="px-6 pb-24">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-black mb-14">
          Proyectos
        </h2>

        <div className="space-y-16">

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