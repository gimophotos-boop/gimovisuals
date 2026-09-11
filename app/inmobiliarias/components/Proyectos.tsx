"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "../projects";

export default function Proyectos() {
  return (
    <section className="px-6 pb-28">
      <div className="max-w-7xl mx-auto">

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
