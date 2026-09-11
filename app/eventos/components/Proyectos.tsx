"use client";

import EventProjectCard from "./EventProjectCard";
import { projects } from "../projects";

const destacados = [
  {
    nombre: "Henry Méndez",
    location: "La Pobla de Mafumet",
    href: "/eventos/proyectos/henry-mendez",
    video: "/assets/videos/eventos/henry-mendez/video.mp4",
  },
  {
    nombre: "Marsal Ventura",
    location: "La Pobla de Mafumet",
    href: "/eventos/proyectos/marsal-ventura",
    video: "/assets/videos/eventos/marsal-ventura/video.mp4",
  },
  {
    nombre: "Alvama Ice",
    location: "La Pobla de Mafumet",
    href: "/eventos/proyectos/alvama-ice",
    video: "/assets/videos/eventos/alvama-ice/video.mp4",
  },
  {
    nombre: "MonDj",
    location: "La Pobla de Mafumet",
    href: "/eventos/proyectos/mondj",
    video: "/assets/videos/eventos/mondj/video.mp4",
  },
];

function getImages(href: string) {
  const slug = href.split("/").pop();

  if (!slug) return [];

  return Array.from({ length: 12 }, (_, index) => {
    return `/assets/images/eventos/${slug}/${index + 1}.jpg`;
  });
}

export default function Proyectos() {
  const eventos = projects.filter(
    (project) =>
      project.href !== "/eventos/proyectos/henry-mendez" &&
      project.href !== "/eventos/proyectos/marsal-ventura" &&
      project.href !== "/eventos/proyectos/alvama-ice" &&
      project.href !== "/eventos/proyectos/mondj"
  );

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* FOTO DE FONDO */}

      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("/assets/images/eventos/concurso-fuegos-artificiales-tarragona-2026/8.jpg")',
        }}
      />

      {/* OSCURECIMIENTO */}

      <div className="absolute inset-0 bg-black/25" />

      {/* DEGRADADO */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/15 to-black/45" />


      {/* CONTENIDO */}

      <div className="relative z-10 px-6 pb-32">

        {/* ESPACIO REAL DEBAJO DEL NAVBAR */}

        <div className="h-[120px]" />


        <div className="max-w-7xl mx-auto">

          {/* ARTISTAS DESTACADOS */}

          <div className="mb-28">

            <div className="text-center mb-14">

              <p className="uppercase tracking-[6px] text-red-500 font-medium text-[17px] mb-4">
                ARTISTAS DESTACADOS
              </p>

              <h2 className="text-[58px] leading-[1.04] font-black tracking-[-1.5px]">
                Artistas destacados
              </h2>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {destacados.map((artista) => (

                <a
                  key={artista.href}
                  href={artista.href}
                  className="group relative overflow-hidden rounded-[28px] aspect-[4/5] bg-neutral-900"
                >

                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  >
                    <source
                      src={artista.video}
                      type="video/mp4"
                    />
                  </video>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">

                    <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-red-500 transition-colors duration-300">
                      {artista.nombre}
                    </h3>

                    <p className="mt-2 uppercase tracking-[3px] text-sm text-red-500 font-medium">
                      {artista.location}
                    </p>

                  </div>

                </a>

              ))}

            </div>

          </div>


          {/* EVENTOS */}

          <div>

            <div className="text-center mb-14">

              <p className="uppercase tracking-[6px] text-red-500 font-medium text-[17px] mb-4">
                PROYECTOS
              </p>

              <h2 className="text-[58px] leading-[1.04] font-black tracking-[-1.5px]">
                Nuestros eventos
              </h2>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {eventos.map((project) => (

                <EventProjectCard
                  key={project.href}
                  title={project.title}
                  location={project.location}
                  href={project.href}
                  images={getImages(project.href)}
                />

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
