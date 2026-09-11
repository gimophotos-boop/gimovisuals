"use client";

import DeporteProjectCard from "./DeporteProjectCard";
import { projects } from "../projects";

export default function Proyectos() {
  return (
    <section className="px-0 pb-10">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <h2 className="text-[52px] md:text-[58px] leading-[1.04] font-black tracking-[-1.5px] translate-y-[50px]">
            Nuestros trabajos
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 translate-y-[140px]">

          {projects.map((project) => (
            <DeporteProjectCard
              key={project.href}
              title={project.title}
              location={project.location}
              video={project.video}
              href={project.href}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
