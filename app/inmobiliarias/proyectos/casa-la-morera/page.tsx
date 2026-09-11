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

      {/* HERO */}
      <section className="relative h-[650px] overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/assets/videos/inmo.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black to-transparent" />

        <div className="relative z-10 h-full max-w-[1420px] mx-auto px-8 flex items-end">

          <div className="max-w-[720px] pb-20">

            <p className="uppercase tracking-[5px] text-red-500 font-medium text-[17px] mb-5">
              PROYECTO INMOBILIARIO
            </p>

            <h1 className="text-[58px] leading-[1.04] font-black tracking-[-1.5px] mb-7">
              Casa La Morera
            </h1>

            <p className="text-[20px] leading-[1.7] text-gray-200 max-w-[620px]">
              Reportaje completo realizado con fotografía, vídeo y dron
              profesional.
            </p>

          </div>

        </div>

      </section>

      {/* VOLVER */}
      <section className="bg-black px-8 pt-16 pb-12">

        <div className="max-w-[1250px] mx-auto">

          <Link
            href="/inmobiliarias"
            className="inline-flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 text-sm"
          >
            ← Volver a Inmobiliarias
          </Link>

        </div>

      </section>

      {/* FOTOGRAFÍAS */}
      <section className="bg-black px-8 pb-32">

        <div className="max-w-[1250px] mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-red-500 font-medium text-[17px] mb-4">
              FOTOGRAFÍAS
            </p>

            <h2 className="text-[52px] leading-[1.05] font-black tracking-[-1px]">
              Casa La Morera
            </h2>

          </div>

          <div className="max-w-[1120px] mx-auto">
            <Gallery
              images={project.images}
              onImageClick={openImage}
            />
          </div>

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
