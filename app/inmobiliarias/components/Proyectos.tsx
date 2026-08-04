"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "../projects";

export default function Proyectos() {
  return (
    <section className="bg-black py-40 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-24">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-5">
            PROYECTOS
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Trabajos realizados
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cada vivienda dispone de su propio reportaje fotográfico,
            vídeo profesional y grabación aérea para mostrarla de la
            mejor manera posible.
          </p>

        </div>

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