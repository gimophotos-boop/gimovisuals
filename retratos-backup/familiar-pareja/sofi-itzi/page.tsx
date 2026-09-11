"use client";

import { useState } from "react";
import Link from "next/link";

import { project } from "./data";

import Gallery from "@/app/components/gallery/Gallery";
import Lightbox from "@/app/components/gallery/Lightbox";

export default function SofiItziPage() {
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

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          <Link
            href="/retratos/playa"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition mb-12"
          >
            ← Volver a Playa
          </Link>

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
            RETRATOS · PLAYA
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-8">
            {project.title}
          </h1>

          <p className="max-w-3xl text-xl text-gray-400 leading-9">
            {project.description}
          </p>

        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold mb-10">
            Fotografías
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
