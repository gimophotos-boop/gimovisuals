"use client";

import { projects } from "../projects";
import ProjectCard from "@/app/inmobiliarias/components/ProjectCard";

const destacados = [
  {
    nombre: "Henry Méndez",
    evento: "Summer Festival 2025",
    href: "/eventos/proyectos/henry-mendez",
    video: "/assets/videos/eventos/henry-mendez/video.mp4",
  },
  {
    nombre: "Marsal Ventura",
    evento: "Techno Flamenco 2024",
    href: "/eventos/proyectos/marsal-ventura",
    video: "/assets/videos/eventos/marsal-ventura/video.mp4",
  },
  {
    nombre: "Alvama Ice",
    evento: "Pobla Lledó Session 2026",
    href: "/eventos/proyectos/alvama-ice",
    video: "/assets/videos/eventos/alvama-ice/video.mp4",
  },
  {
    nombre: "MonDj",
    evento: "Pobla Lledó Session 2025",
    href: "/eventos/proyectos/mondj",
    video: "/assets/videos/eventos/mondj/video.mp4",
  },
];

export default function Proyectos() {
  const eventos = projects.filter(
    (project) =>
      project.href !== "/eventos/proyectos/henry-mendez" &&
      project.href !== "/eventos/proyectos/marsal-ventura" &&
      project.href !== "/eventos/proyectos/alvama-ice" &&
      project.href !== "/eventos/proyectos/mondj"
  );

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
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
                  <source src={artista.video} type="video/mp4" />
                </video>

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
            {eventos.map((project) => (
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