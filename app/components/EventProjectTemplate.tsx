"use client";

import { useState } from "react";
import Link from "next/link";

import Gallery from "@/app/components/gallery/Gallery";
import Lightbox from "@/app/components/gallery/Lightbox";

type Project = {
  title: string;
  location: string;
  description: string;
  heroVideo?: string;
  artists: string[];
  services: string[];
  images: string[];
};

type Props = {
  project: Project;
};

export default function EventProjectTemplate({ project }: Props) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  function openImage(index: number) {
    setCurrent(index);
    setOpen(true);
  }

  function nextImage() {
    setCurrent((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  }

  function prevImage() {
    setCurrent((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <Link
          href="/eventos"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-10"
        >
          ← Volver a Eventos
        </Link>

        <h1 className="text-5xl md:text-7xl font-black mb-4">
          {project.title}
        </h1>

        <p className="text-xl text-red-500 mb-10">
          {project.location}
        </p>

        {project.heroVideo && (
          <div className="overflow-hidden rounded-[30px] border border-zinc-800 mb-16">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full"
            >
              <source
                src={project.heroVideo}
                type="video/mp4"
              />
            </video>
          </div>
        )}

        <p className="text-lg text-gray-300 leading-8 mb-16">
          {project.description}
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20">

          <div>

            <h2 className="text-2xl font-bold mb-5">
              Artistas presentes
            </h2>

            <ul className="space-y-3">

              {project.artists.map((artist) => (
                <li key={artist} className="text-gray-300">
                  • {artist}
                </li>
              ))}

            </ul>

          </div>

          <div>

            <h2 className="text-2xl font-bold mb-5">
              Servicios realizados
            </h2>

            <ul className="space-y-3">

              {project.services.map((service) => (
                <li key={service} className="text-gray-300">
                  • {service}
                </li>
              ))}

            </ul>

          </div>

        </div>

        <Gallery
          images={project.images}
          onImageClick={openImage}
        />

        <Lightbox
          images={project.images}
          current={current}
          open={open}
          onClose={() => setOpen(false)}
          onNext={nextImage}
          onPrev={prevImage}
        />

      </div>

    </main>
  );
}