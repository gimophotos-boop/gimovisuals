"use client";

import { project } from "./data";
import Gallery from "@/app/components/gallery/Gallery";
import Lightbox from "@/app/components/gallery/Lightbox";
import Link from "next/link";
import { useState } from "react";

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
    <main className="bg-black min-h-screen text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <Link
          href="/inmobiliarias"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-10"
        >
          ← Volver a Inmobiliarias
        </Link>

        <h1 className="text-5xl md:text-7xl font-black mb-12">
          {project.title}
        </h1>

        {/* VIDEO */}

        <div className="max-w-5xl mx-auto mb-24 rounded-[30px] overflow-hidden border border-zinc-800 shadow-2xl">

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full aspect-video object-cover"
          >
            <source src={project.heroVideo} type="video/mp4" />
          </video>

        </div>

        {/* GALERÍA */}

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