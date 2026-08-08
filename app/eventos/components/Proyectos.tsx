"use client";

import { projects } from "../projects";
import ProjectCard from "@/app/inmobiliarias/components/ProjectCard";

const destacados = [
  {
    nombre: "Henry Méndez",
    evento: "Summer Festival 2025",
    href: "/eventos/proyectos/summer-festival-2025",
    imagen: "/assets/images/eventos/henry-mendez/1.jpg",
  },
  {
    nombre: "Marsal Ventura",
    evento: "Techno Flamenco 2024",
    href: "/eventos/proyectos/techno-flamenco-2024",
    imagen: "/assets/images/eventos/techno-flamenco-2024/1.jpg",
  },
  {
    nombre: "Alvama Ice",
    evento: "Pobla Lledó Session 2026",
    href: "/eventos/proyectos/alvama-ice",
    imagen: "/assets/images/eventos/alvama-ice/1.jpg",
  },
  {
    nombre: "Mondj",
    evento: "Pobla Lledó Session 2025",
    href: "/eventos/proyectos/pobla-lledo-session-2025",
    imagen: "/assets/images/eventos/pobla-lledo-session-2025/1.jpg",
  },
];

export default function Proyectos() {
  return (
    <section className="pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ARTISTAS DESTACADOS */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            Artistas destacados
          </h2>

          <p className="text-gray-400 mb-8">
            Algunos de los artistas y eventos destacados que hemos cubierto.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {destacados.map((artista) => (
              <a
                key={artista.href}
                href={artista.href}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-neutral-900"
              >
                <img
                  src={artista.imagen}
                  alt={`${artista.nombre} - ${artista.evento}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-sm text-gray-300 mb-1">
                    {artista.evento}
                  </p>

                  <h3 className="text-2xl font-black text-white">
                    {artista.nombre}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* TODOS LOS EVENTOS */}
        <div>
          <h2 className="text-3xl md:text-4xl font-black mb-8">
            Eventos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      </div>
    </section>
  );
}
