"use client";

import { useState } from "react";
import Gallery from "./gallery/Gallery";
import Lightbox from "./gallery/Lightbox";

type ProjectData = {
  title: string;
  location: string;
  description: string;
  heroVideo: string;
  services: string[];
  delivery: string;
  format: string;
  images: string[];
};

type Props = {
  project: ProjectData;
};

export default function ProjectTemplate({ project }: Props) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  function openImage(index: number) {
    setCurrent(index);
    setOpen(true);
  }

  function nextImage() {
    setCurrent((prev) => (prev + 1) % project.images.length);
  }

  function prevImage() {
    setCurrent((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  }

  return (
    <main className="bg-black text-white">

      {/* HERO */}

      <section className="relative h-[75vh] overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={project.heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-end">

          <div className="max-w-7xl mx-auto w-full px-6 pb-20">

            <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-4">
              Proyecto
            </p>

            <h1 className="text-6xl md:text-8xl font-black mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl leading-8">
              {project.description}
            </p>

          </div>

        </div>

      </section>

      {/* INFORMACIÓN */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

          <div>

            <p className="uppercase tracking-[6px] text-red-500 font-semibold mb-4">
              EL PROYECTO
            </p>

            <h2 className="text-5xl font-black mb-8">
              {project.title}
            </h2>

            <p className="text-gray-400 text-lg leading-9">
              {project.description}
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

              <h3 className="text-red-500 font-bold mb-4">
                Servicios
              </h3>

              <div className="space-y-2 text-gray-400">

                {project.services.map((service) => (
                  <p key={service}>{service}</p>
                ))}

              </div>

            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

              <h3 className="text-red-500 font-bold mb-4">
                Ubicación
              </h3>

              <p className="text-gray-400">
                {project.location}
              </p>

            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

              <h3 className="text-red-500 font-bold mb-4">
                Entrega
              </h3>

              <p className="text-gray-400">
                {project.delivery}
              </p>

            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

              <h3 className="text-red-500 font-bold mb-4">
                Formato
              </h3>

              <p className="text-gray-400">
                {project.format}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* GALERÍA */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black mb-16">
            Galería
          </h2>

          <Gallery
            images={project.images}
            onImageClick={openImage}
          />

        </div>

      </section>

      <Lightbox
        images={project.images}
        current={current}
        open={open}
        onClose={() => setOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />

    </main>
  );
}