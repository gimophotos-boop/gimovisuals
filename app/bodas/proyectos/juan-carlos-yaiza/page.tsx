"use client";

import { useState } from "react";
import Link from "next/link";

import { project } from "./data";

import Gallery from "@/app/components/gallery/Gallery";
import Lightbox from "@/app/components/gallery/Lightbox";

export default function JuanCarlosYaizaPage() {
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
    <main>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <Link
            href="/bodas"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-10"
          >
            ← Volver a Bodas
          </Link>

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
            BODAS
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-8">
            {project.title}
          </h1>

          <p className="max-w-3xl text-xl text-gray-400 leading-9 mb-12">
            {project.description}
          </p>

          <div className="aspect-video rounded-[30px] overflow-hidden bg-zinc-900 mb-20">
            <video
              className="w-full h-full object-cover"
              src={project.coverVideo}
              controls
              muted
              playsInline
            />
          </div>

          <section>
            <h2 className="text-3xl font-bold mb-8">
              Fotografías
            </h2>

            {project.images.length > 0 ? (
              <Gallery
                images={project.images}
                onImageClick={openImage}
              />
            ) : (
              <div className="rounded-[30px] border border-zinc-800 bg-zinc-950 p-16 text-center">
                <span className="text-zinc-600 uppercase tracking-[4px] text-sm">
                  Fotografías próximamente
                </span>
              </div>
            )}
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
      </section>
    </main>
  );
}
