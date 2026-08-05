"use client";

import { useState } from "react";
import Link from "next/link";

import { project } from "./data";

import Gallery from "@/app/components/gallery/Gallery";
import Lightbox from "@/app/components/gallery/Lightbox";

export default function CasaLaMoreraPage() {
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
          href="/inmobiliarias"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-10"
        >
          ← Volver a Inmobiliarias
        </Link>

        <h1 className="text-5xl md:text-7xl font-black mb-16">
          Casa La Morera
        </h1>

        <section className="mb-24">

          <h2 className="text-3xl font-bold mb-8">
            Proyecto
          </h2>

          <div className="overflow-hidden rounded-[30px] border border-zinc-800">

            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full"
            >
              <source
                src="/assets/videos/inmo.mp4"
                type="video/mp4"
              />
            </video>

          </div>

        </section>

        <section>

          <h2 className="text-3xl font-bold mb-8">
            Fotografías
          </h2>

          <Gallery
            images={project.images}
            onImageClick={openImage}
          />

        </section>

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